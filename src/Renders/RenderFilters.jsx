import React, { useContext } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function RenderFilters() {
  const { filterByNumericValue } = useContext(PlanetsContext);

  return (
    <div>
      {filterByNumericValue.map((element, index) => (
        <p key={ index }>
          { element.column }
          {' '}
          { element.comparison }
          {' '}
          { element.value }
        </p>
      ))}
    </div>
  );
}

export default RenderFilters;
