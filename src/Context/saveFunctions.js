// function filterByNumber() {
//   const filterComparison = filterByNumericValue[0].comparison;
//   // ajeitar essa parte, ta dando erro na comparação e n ta saindo certo
//   if (filterByNumericValue.length === 1 && filterComparison === 'maior que') {
//     const filterColumn = filterByNumericValue[0].column;
//     const filterValue = filterByNumericValue[0].value;
//     const plusNumberFilters = filteredPlanets.filter((element) => (
//       +element[filterColumn] > +filterValue
//     ));
//     const removeColumn = options.filter((element) => element !== filterColumn);
//     setOptions(removeColumn);
//     setFilteredPlanets(plusNumberFilters);
//   } else if (filterByNumericValue.length === 1 && filterComparison === 'menor que') {
//     const filterValue = filterByNumericValue[0].value;
//     const filterColumn = filterByNumericValue[0].column;
//     const lessNumberFilters = filteredPlanets.filter((element) => (
//       +element[filterColumn] < +filterValue
//     ));
//     const removeColumn = options.filter((element) => element !== filterColumn);
//     setOptions(removeColumn);
//     setFilteredPlanets(lessNumberFilters);
//   } else if (filterByNumericValue.length === 1 && filterComparison === 'igual a') {
//     const filterValue = filterByNumericValue[0].value;
//     const filterColumn = filterByNumericValue[0].column;
//     const sameNumberFilters = filteredPlanets.filter((element) => (
//       +element[filterColumn] === +filterValue
//     ));
//     const removeColumn = options.filter((element) => element !== filterColumn);
//     setOptions(removeColumn);
//     setFilteredPlanets(sameNumberFilters);
//   }
// }

// function filterByNumberMultiple() {
//   const filterComparison = filterByNumericValue[(filterByNumericValue.length) - 1]
//     .comparison;
//   if (filterComparison === 'maior que') {
//     const filterValue = filterByNumericValue[(filterByNumericValue.length) - 1].value;
//     const filterColumn = filterByNumericValue[(filterByNumericValue.length) - 1].column;
//     const plusNumberMultipleFilters = filteredPlanets.filter((element) => (
//       +element[filterColumn] > +filterValue
//     ));
//     const removeColumn = options.filter((element) => element !== filterColumn);
//     setOptions(removeColumn);
//     setFilteredPlanets(plusNumberMultipleFilters);
//     // console.log('foi maior que');
//   } else if (filterComparison === 'menor que') {
//     const filterValue = filterByNumericValue[(filterByNumericValue.length) - 1].value;
//     const filterColumn = filterByNumericValue[(filterByNumericValue.length) - 1].column;
//     const plusNumberMultipleFilters = filteredPlanets.filter((element) => (
//       +element[filterColumn] < +filterValue
//     ));
//     const removeColumn = options.filter((element) => element !== filterColumn);
//     setOptions(removeColumn);
//     setFilteredPlanets(plusNumberMultipleFilters);
//     // console.log('foi menor que');
//   } else if (filterComparison === 'igual a') {
//     const filterValue = filterByNumericValue[(filterByNumericValue.length) - 1].value;
//     const filterColumn = filterByNumericValue[(filterByNumericValue.length) - 1].column;
//     const plusNumberMultipleFilters = filteredPlanets.filter((element) => (
//       +element[filterColumn] === +filterValue
//     ));
//     const removeColumn = options.filter((element) => element !== filterColumn);
//     setOptions(removeColumn);
//     setFilteredPlanets(plusNumberMultipleFilters);
//     // console.log('foi igual a');
//   }
// }
