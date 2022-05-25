import React, { useContext } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function FilterForm() {
  const { planetName,
    handleSearch,
    handleValue,
    numericValue,
    handleAttribute,
    handleComparasion,
    attribute,
    comparasion,
    addFilter,
    filterByNumericValue,
    options } = useContext(PlanetsContext);

  function handleClick() {
    const filter = {
      column: attribute,
      comparison: comparasion,
      value: numericValue,
    };
    const compare = filterByNumericValue.filter((element) => (
      element.value === filter.value
      && element.comparison === filter.comparison
      && element.column === filter.column
    ));
    if (compare.length === 0) {
      addFilter(filter);
    }
  }

  return (
    <form>
      <label htmlFor="planetName">
        Planeta
        <input
          id="planetName"
          name="planetName"
          data-testid="name-filter"
          onChange={ handleSearch }
          value={ planetName }
          placeholder="Escreva o nome de um Planeta"
        />
      </label>
      <div>
        <select data-testid="column-filter" onChange={ handleAttribute }>
          { options.map((element) => (
            <option key={ element } value={ element }>{ element }</option>
          )) }
        </select>
        <select data-testid="comparison-filter" onChange={ handleComparasion }>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <label htmlFor="value">
          <input
            type="number"
            id="value"
            data-testid="value-filter"
            value={ numericValue }
            onChange={ handleValue }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          filter

        </button>
      </div>
    </form>
  );
}

export default FilterForm;
