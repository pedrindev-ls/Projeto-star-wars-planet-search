import testData from '../testData';

async function requirePlanets() {
  // const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  // const ask = await fetch(URL);
  // const data = await ask.json();
  // return data.results;
  return testData.results;
}

export default requirePlanets;
