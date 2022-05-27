/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import requirePlanets from '../Helpers/requirePlanets';
import PlanetsContext from '../Context/PlanetsContext';

function Table() {
  const {
    addPlanets,
    planetName,
    filteredPlanets,
    filterByName,
    renderFilters,
    filterByNumericValue } = useContext(PlanetsContext);

  async function askPlanets() {
    const planetsObj = await requirePlanets();
    addPlanets(planetsObj);
  }

  useEffect(() => {
    askPlanets();
  });

  useEffect(() => {
    filterByName();
  }, [planetName]);

  useEffect(() => {
    renderFilters();
  }, [filterByNumericValue]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {filteredPlanets.map((element) => (
          <tr key={ element.name }>
            <td>{ element.name }</td>
            <td>{ element.rotation_period }</td>
            <td>{ element.orbital_period }</td>
            <td>{ element.diameter }</td>
            <td>{ element.climate }</td>
            <td>{ element.gravity }</td>
            <td>{ element.terrain }</td>
            <td>{ element.surface_water }</td>
            <td>{ element.population }</td>
            <td>{ element.films }</td>
            <td>{ element.created }</td>
            <td>{ element.edited }</td>
            <td>{ element.url }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
