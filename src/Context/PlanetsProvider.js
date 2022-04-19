import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider(props) {
  const [planets, setPlanets] = useState([]);
  const [planetName, setPlanetName] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  function addPlanets(newPlanets) {
    setPlanets(newPlanets);
  }

  function filterByName() {
    const filteredByName = planets.filter((element) => (
      element.name.includes(planetName) === true));
    setFilteredPlanets(filteredByName);
  }

  function handleSearch({ target }) {
    const { value } = target;
    setPlanetName(value);
  }

  const { children } = props;

  return (
    <PlanetsContext.Provider
      value={ {
        planets,
        addPlanets,
        planetName,
        handleSearch,
        filteredPlanets,
        filterByName,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default PlanetsProvider;
