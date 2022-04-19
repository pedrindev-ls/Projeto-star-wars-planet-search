import React, { useContext, useEffect } from 'react';
import requirePlanets from './Helpers/requirePlanets';
import PlanetsContext from './Context/PlanetsContext';

function Table() {
  const { planets, addPlanets } = useContext(PlanetsContext);

  async function askPlanets() {
    const planetsObj = await requirePlanets();
    await addPlanets(planetsObj);
  }

  useEffect(() => {
    askPlanets();
  });

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
        {planets.map((element) => (
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
