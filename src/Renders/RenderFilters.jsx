import React, { useContext } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function RenderFilters() {
  const { filterByNumericValue } = useContext(PlanetsContext);

  return (
    <div>
      {filterByNumericValue.map((element, index) => (
        <div key={ index }>
          <p>
            { element.column }
            {' '}
            { element.comparison }
            {' '}
            { element.value }
          </p>
          <button type="button">X</button>
        </div>
      ))}
    </div>
  );
}

export default RenderFilters;
