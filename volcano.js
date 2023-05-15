const volcanoes = require('./volcano.json');

const eruptedInEighties = () => {
  // TODO: return the volcanoes that erupted in the 1980s.

  let result = volcanoes.filter(v => v.Year >= 1980)
                        .filter(v => v.Year < 1990);
  
  console.log(result.map(v => v.Year));

  console.log(result.length);
  
  return result;
}

console.log('-- Erupted in the Eighties --');

eruptedInEighties();  // a Total of 40 was returned

// const highVEI = () => {     // <---- HOW DO I RETURN A UNIQUE LIST WITH A COUNT FOR EACH UNIQUE VALUE
//   // TODO: return an array of the names of volcanoes that have a VEI of 6 or higher.

// // // This works, trying to pare it down to a unique list.
// //   let result = volcanoes.filter(v => v.VEI >= 6 )
// //                         .map(v => v.Name);
// //

// // This returns a unique list of the Volcanoes
//   let result = [];

//   myArray = volcanoes.filter(v => v.VEI >= 6 )
//                      .map(v => v.Name)
//                      .forEach(i => {
//                        if (!result.includes(i)) 
//                             result.push(i)
//                         })
//   ;

//   console.log(result.sort());
// }

// console.log('--- VEI greater than or equal to 6 ---');

// highVEI();

// const mostDeadly = () => {
//   // TODO: return the volcano with the highest recorded deaths.
//   // Find?
//   let myArray = volcanoes.filter(v => v.DEATHS > '').sort((a, b) => a.DEATHS - b.DEATHS);
//   let result = myArray[myArray.length-1];
//   console.log(result);
// }

// mostDeadly();

// const causedTsunami = () => {
//   // TODO: return the percentage of volcanoes that caused tsunamis.
//   // filter then Map
//   let result = Math.floor(volcanoes.filter(v => v.Agent === 'W').length/volcanoes.length*10000)/100;
//   console.log(result + '%');
// }

// causedTsunami();

// const mostCommonType = () => { 
//   // TODO: return the most common type of volcano in the list

//   let typeArray = [];
//   let myObj = {};
//   let myArray = volcanoes.map(v => v.Type)
//                          .sort(v => v.Type)
//                          .forEach( t => { 
//                             if (!typeArray.includes(t)) {
//                               myObj.Type=t;
//                               myObj.Count=1;
//                               typeArray.push(myObj);
//                             } else {
//                               typeArray.findIndex((x) => x === t ).Count++                                       
//                             }
//                          });

//   let result=typeArray;
//   console.log(result);
// }

// mostCommonType();


// const eruptionsByCountry = (country) => {
//   // TODO: return the number of eruptions when supplied a country as an argument
//   let result = volcanoes.filter(v => v.Country === country).length;
              
//   console.log(result);
// }

// eruptionsByCountry('Italy');

// const averageElevation = () => {
//   // TODO: return the average elevation of all volcanoes
//   let result = Math.floor(volcanoes.map(v => v.Elevation).reduce((s, e) => s + e)/volcanoes.length*100)/100; 
//   console.log(result);
// }

// averageElevation();

// const volcanoTypes = () => {  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< NOT DONE YET
//   // TODO: return an array of types of volcanoes
//   let result = volcanoes.map( v => v.Type);
//   console.log(result);
// }

// volcanoTypes();

// const percentNorth = () => {
//   // TODO: return the percentage of eruptions that occurred in the Northern hemisphere
//   let result = Math.floor(volcanoes.filter(v => v.Longitude > 0).length/volcanoes.length*10000)/100;
//   console.log(result + '%');
// }

// percentNorth();

// const manyFilters = () => {    <<<<< How do i make this a unique list with counts?????
//   // TODO: return names of eruptions that occurred after 1800, that did not cause a tsunami, happened in the Southern hemisphere, and had a VEI of 5.
//   let result =volcanoes.filter(v => v.Year > 1800)
//                        .filter(v => v.Agent !== 'W')
//                        .filter(v => v.Longitude < 0)
//                        .filter(v => v.VEI === 5)
//                        .map(v => v.Name);
//   console.log(result);
// }

// manyFilters();

// const elevatedVolcanoes = (elevation) => { <<<<< How do i make this a unique list with counts?????
//   // TODO: return names of eruptions that occurred at or above an elevation passed as an argument
//   let result = volcanoes.filter(v => v.Elevation >= elevation)
//                         .map(v => v.Name);
//   console.log(result);
// }

// elevatedVolcanoes(5000);

// const topAgentsOfDeath = (elevation) => {   <<<< SORT IS NOT WORKING
//   // TODO: return the unique agents of death in the top ten deadliest eruptions
//   let result = volcanoes.filter(v => v.DEATHS > '')
//                         .sort(v => v.DEATHS)
//                         .slice(0,10)
//   console.log(result);
// }

// topAgentsOfDeath();