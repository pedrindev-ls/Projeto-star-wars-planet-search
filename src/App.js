import React from 'react';
import './App.css';
import PlanetsProvider from './Context/PlanetsProvider';
import FilterForm from './Renders/FilterForm';
import Table from './Renders/Table';

function App() {
  return (
    <PlanetsProvider>
      <FilterForm />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
