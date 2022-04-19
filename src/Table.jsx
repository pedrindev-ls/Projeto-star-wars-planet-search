import React, { useContext, useEffect } from 'react';
import requirePlanets from './Helpers/helpers';
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
            <th>{ element.name }</th>
            <th>{ element.rotation_period }</th>
            <th>{ element.orbital_period }</th>
            <th>{ element.diameter }</th>
            <th>{ element.climate }</th>
            <th>{ element.gravity }</th>
            <th>{ element.terrain }</th>
            <th>{ element.surface_water }</th>
            <th>{ element.population }</th>
            <th>{ element.films }</th>
            <th>{ element.created }</th>
            <th>{ element.edited }</th>
            <th>{ element.url }</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
