const volcanoes = require('./volcano.json');

// const eruptedInEighties = () => {
//   // TODO: return the volcanoes that erupted in the 1980s.
//   // filter volcanoes Year >= 1980
//   // filter volcanoes Year < 1990
//   let result = volcanoes.filter(v => v.Year >= 1980)
//                         .filter(v => v.Year < 1990);

//   console.log(result);
// }

// console.log('-- Erupted in the Eighties --');

// eruptedInEighties();

// const highVEI = () => {
//   // TODO: return an array of the names of volcanoes that have a VEI of 6 or higher.
//   // filter
//   let result = volcanoes.filter(v => v.VEI >= 6 )
//                         .map(v => v.Name);
//   console.log(result);
// }

// console.log('--- VEI greater than or equal to 6 ---');

// highVEI();

// const mostDeadly = () => {
//   // TODO: return the volcano with the highest recorded deaths.
//   // Find?
//   let result = volcanoes.filter(v => v.DEATHS > '').sort(v => v.DEATHS).shift();
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
// const mostCommonType = () => { <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< NOT DONE YET
//   // TODO: return the most common type of volcano in the list

//   let result = volcanoes.sort(v => v.Type)
//                         .forEach( t in v) {
//                           if ()
//                         }
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

const topAgentsOfDeath = (elevation) => {
  // TODO: return the unique agents of death in the top ten deadliest eruptions
  let result = volcanoes.filter(v => v.DEATHS > '')
                        .sort(v => v.DEATHS)
                        .slice(0,10)
  console.log(result);
}

topAgentsOfDeath();