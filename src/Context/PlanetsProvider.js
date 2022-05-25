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

  // function roleteFilter() {
  //   if (filterByNumericValue) {
  //     filterByNumericValue.map((element) => {
  //       if (element.comparison === 'maior que') {
  //         const filterColumn = element.column;
  //         const filterValue = element.value;
  //         const filtringPlanets = planets.filter((element2) => (
  //           +element2[filterColumn] > +filterValue
  //         ));
  //         const removeColumn = options.filter((ops) => ops !== filterColumn);
  //         setOptions(removeColumn);
  //         setFilteredPlanets(filtringPlanets);
  //       }
  //       return 1;
  //     });
  //   } else {
  //     setFilteredPlanets(planets);
  //   }
  // }

  function addFilter(filter) {
    setFilterByNumericValue([...filterByNumericValue, filter]);
  }

  function filterByName() {
    console.log(planetName.length);
    if (planetName.length === 0) {
      // setFilteredPlanets(filteredPlanets);
      // roleteFilter();
    } else if (planetName.length > 0) {
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
