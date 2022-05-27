import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider(props) {
  const [planets, setPlanets] = useState([]);
  const [planetName, setPlanetName] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [numericValue, setNumericValue] = useState(0);
  const [comparasion, setComparasion] = useState('maior que');
  const [attribute, setAttribute] = useState('population');
  const [filterByNumericValue, setFilterByNumericValue] = useState([]);
  const [options, setOptions] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  function addPlanets(newPlanets) {
    setPlanets(newPlanets);
    if (filteredPlanets.length === 0 && planetName.length === 0) {
      setFilteredPlanets(newPlanets);
    }
  }

  function addFilter(filter) {
    setFilterByNumericValue([...filterByNumericValue, filter]);
  }

  function renderFilters() {
      filterByNumericValue.forEach((element) => {
        const filteredColumn = element.column
        const filteredValue = element.value
        const filteredComparison = element.comparison
        if (filteredComparison === 'maior que') {
          const filtringPlanets = filteredPlanets.filter((element2) => +element2[filteredColumn] > +filteredValue)
          setFilteredPlanets(filtringPlanets)
          console.log('maior');
          const newOps = options.filter((element2) => element2 !== filteredColumn)
          setOptions(newOps)
        } else if (filteredComparison === 'menor que') {
          console.log('menor');
          const filtringPlanets = filteredPlanets.filter((element2) => +element2[filteredColumn] < +filteredValue)
          setFilteredPlanets(filtringPlanets)
          const newOps = options.filter((element2) => element2 !== filteredColumn)
          setOptions(newOps)
        } else if (filteredComparison === 'igual a') {
          const filtringPlanets = filteredPlanets.filter((element2) => +element2[filteredColumn] === +filteredValue)
          setFilteredPlanets(filtringPlanets)
          const newOps = options.filter((element2) => element2 !== filteredColumn)
          setOptions(newOps)
        }
      })
  }

  function filterByName() {
    if (filterByNumericValue.length === 0) {
      const filteredByName = planets.filter((element) => (
        element.name.includes(planetName) === true));
      setFilteredPlanets(filteredByName);
    } else if (filterByNumericValue.length > 0) {
      setFilteredPlanets(planets);
      renderFilters();
      const filteredByName = filteredPlanets.filter((element) => (
        element.name.includes(planetName) === true));
      setFilteredPlanets(filteredByName);
    }
  }

  function handleAttribute({ target }) {
    const { value } = target;
    setAttribute(value);
  }

  function handleComparasion({ target }) {
    const { value } = target;
    setComparasion(value);
  }

  function handleValue({ target }) {
    const { value } = target;
    setNumericValue(value);
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
        filterByNumericValue,
        setFilterByNumericValue,
        handleValue,
        numericValue,
        comparasion,
        attribute,
        handleAttribute,
        handleComparasion,
        addFilter,
        options,
        setOptions,
        renderFilters,
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
