import React, { useContext } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function FilterForm() {
  const { planetName, handleSearch } = useContext(PlanetsContext);

  return (
    <form>
      <label htmlFor="planetName">
        <input
          id="planetName"
          name="planetName"
          data-testid="name-filter"
          onChange={ handleSearch }
          value={ planetName }
          placeholder="Escreva o nome de um Planeta"
        />
      </label>
    </form>
  );
}

export default FilterForm;
