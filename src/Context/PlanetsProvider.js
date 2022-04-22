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
      ));
      const removeColumn = options.filter((element) => element !== filterColumn);
      setOptions(removeColumn);
      setFilteredPlanets(plusNumberFilters);
    } else if (filterByNumericValue.length === 1 && filterComparison === 'menor que') {
      const filterValue = filterByNumericValue[0].value;
      const filterColumn = filterByNumericValue[0].column;
      const lessNumberFilters = filteredPlanets.filter((element) => (
        +element[filterColumn] < +filterValue
      ));
      const removeColumn = options.filter((element) => element !== filterColumn);
      setOptions(removeColumn);
      setFilteredPlanets(lessNumberFilters);
    } else if (filterByNumericValue.length === 1 && filterComparison === 'igual a') {
      const filterValue = filterByNumericValue[0].value;
      const filterColumn = filterByNumericValue[0].column;
      const sameNumberFilters = filteredPlanets.filter((element) => (
        +element[filterColumn] === +filterValue
      ));
      const removeColumn = options.filter((element) => element !== filterColumn);
      setOptions(removeColumn);
      setFilteredPlanets(sameNumberFilters);
    }
  }

  function filterByNumberMultiple() {
    const filterComparison = filterByNumericValue[(filterByNumericValue.length) - 1]
      .comparison;
    if (filterComparison === 'maior que') {
      const filterValue = filterByNumericValue[(filterByNumericValue.length) - 1].value;
      const filterColumn = filterByNumericValue[(filterByNumericValue.length) - 1].column;
      const plusNumberMultipleFilters = filteredPlanets.filter((element) => (
        +element[filterColumn] > +filterValue
      ));
      const removeColumn = options.filter((element) => element !== filterColumn);
      setOptions(removeColumn);
      setFilteredPlanets(plusNumberMultipleFilters);
      // console.log('foi maior que');
    } else if (filterComparison === 'menor que') {
      const filterValue = filterByNumericValue[(filterByNumericValue.length) - 1].value;
      const filterColumn = filterByNumericValue[(filterByNumericValue.length) - 1].column;
      const plusNumberMultipleFilters = filteredPlanets.filter((element) => (
        +element[filterColumn] < +filterValue
      ));
      const removeColumn = options.filter((element) => element !== filterColumn);
      setOptions(removeColumn);
      setFilteredPlanets(plusNumberMultipleFilters);
      // console.log('foi menor que');
    } else if (filterComparison === 'igual a') {
      const filterValue = filterByNumericValue[(filterByNumericValue.length) - 1].value;
      const filterColumn = filterByNumericValue[(filterByNumericValue.length) - 1].column;
      const plusNumberMultipleFilters = filteredPlanets.filter((element) => (
        +element[filterColumn] === +filterValue
      ));
      const removeColumn = options.filter((element) => element !== filterColumn);
      setOptions(removeColumn);
      setFilteredPlanets(plusNumberMultipleFilters);
      // console.log('foi igual a');
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
        filterByNumberMultiple,
        options,
        setOptions,
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
