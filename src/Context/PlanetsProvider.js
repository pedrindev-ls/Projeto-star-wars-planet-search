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

  function addPlanets(newPlanets) {
    setPlanets(newPlanets);
    if (filteredPlanets.length === 0) {
      setFilteredPlanets(newPlanets);
    }
  }

  function filterByNumber() {
    const filterComparison = filterByNumericValue[0].comparison;
    // ajeitar essa parte, ta dando erro na comparação e n ta saindo certo
    if (filterByNumericValue.length === 1 && filterComparison === 'maior que') {
      const filterColumn = filterByNumericValue[0].column;
      const filterValue = filterByNumericValue[0].value;
      const plusNumberFilters = filteredPlanets.filter((element) => (
        +element[filterColumn] > +filterValue
        // console.log(filterValue, element[filterColumn], element[filterColumn] > numericValue)
      ));
      setFilteredPlanets(plusNumberFilters);
    } else if (filterByNumericValue.length === 1 && filterComparison === 'menor que') {
      const filterValue = filterByNumericValue[0].value;
      const filterColumn = filterByNumericValue[0].column;
      const lessNumberFilters = filteredPlanets.filter((element) => (
        +element[filterColumn] < +filterValue
        // console.log(filterValue, element[filterColumn], +element[filterColumn] < +numericValue)
      ));
      setFilteredPlanets(lessNumberFilters);
    } else if (filterByNumericValue.length === 1 && filterComparison === 'igual a') {
      const filterValue = filterByNumericValue[0].value;
      const filterColumn = filterByNumericValue[0].column;
      // console.log('foi');
      const sameNumberFilters = filteredPlanets.filter((element) => (
        element[filterColumn] === filterValue
        // console.log(element[filterColumn] > numericValue)
      ));
      setFilteredPlanets(sameNumberFilters);
    }
  }

  function addFilter(filter) {
    setFilterByNumericValue([...filterByNumericValue, filter]);
  }

  function filterByName() {
    if (planetName.length === 0) {
      setFilteredPlanets(planets);
    } else if (planetName.length > 0) {
      const filteredByName = planets.filter((element) => (
        element.name.includes(planetName) === true));
      setFilteredPlanets(filteredByName);
      console.log(filteredByName);
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
        filterByNumber,
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
