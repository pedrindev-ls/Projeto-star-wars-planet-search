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
    addFilter } = useContext(PlanetsContext);

  function handleClick() {
    const filter = {
      column: attribute,
      comparison: comparasion,
      value: numericValue,
    };
    addFilter(filter);
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
        <select data-testid="column-filter" onChange={ handleComparasion }>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select data-testid="comparison-filter" onChange={ handleAttribute }>
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
