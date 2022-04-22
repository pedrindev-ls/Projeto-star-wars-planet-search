import React from 'react';
import './App.css';
import PlanetsProvider from './Context/PlanetsProvider';
import FilterForm from './Renders/FilterForm';
import RenderFilters from './Renders/RenderFilters';
import Table from './Renders/Table';

function App() {
  return (
    <PlanetsProvider>
      <FilterForm />
      <RenderFilters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
