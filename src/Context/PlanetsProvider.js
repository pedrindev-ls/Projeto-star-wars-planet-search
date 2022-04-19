import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider(props) {
  const [planets, setPlanets] = useState([]);

  function addPlanets(newPlantes) {
    setPlanets(newPlantes);
  }

  const { children } = props;

  return (
    <PlanetsContext.Provider value={ { planets, addPlanets } }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default PlanetsProvider;
