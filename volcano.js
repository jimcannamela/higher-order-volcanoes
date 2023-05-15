const volcanoes = require('./volcano.json');

const eruptedInEighties = () => {
  // TODO: return the volcanoes that erupted in the 1980s.

  let result = volcanoes.filter(v => v.Year >= 1980)
                        .filter(v => v.Year < 1990);
  
  console.log(result);

  console.log(result.map(v => v.Year));

  console.log(result.length);
  
  return result;
}

console.log('-- Erupted in the Eighties --');

eruptedInEighties();  // a Total of 40 was returned

const highVEI = () => {     // <---- HOW DO I RETURN A UNIQUE LIST WITH A COUNT FOR EACH UNIQUE VALUE
//   // TODO: return an array of the names of volcanoes that have a VEI of 6 or higher.

// This works, trying to pare it down to a unique list.
  // let result = volcanoes.filter(v => v.VEI >= 6 )
  //                       .map(v => v.Name);


// This returns a unique list of the Volcanoes
  let result = [];

  myArray = volcanoes.filter(v => v.VEI >= 6 )
                     .map(v => v.Name)
                     .forEach(i => {
                       if (!result.includes(i)) 
                            result.push(i)
                        })
  ;

  console.log(result.sort());

  return result.sort();
}

console.log('--- VEI greater than or equal to 6 ---');

highVEI();

const mostDeadly = () => {
  // TODO: return the volcano with the highest recorded deaths.
  // Find?
  let result = volcanoes.filter(v => v.DEATHS > '').sort((a, b) => a.DEATHS - b.DEATHS).pop();
  // let result = myArray[myArray.length-1];
  console.log(result);
  return result;
}

console.log('--- Most Deadly Volcano ---');

mostDeadly();

const causedTsunami = () => {
  // TODO: return the percentage of volcanoes that caused tsunamis.
  // filter then Map
  let result = Math.floor(volcanoes.filter(v => v.Agent === 'W').length/volcanoes.length*10000)/100;
  console.log(result + '%');
  return result + '%';
}

console.log('--- Percentaqge of volcanoes which caused tsunamis ---');

causedTsunami();

// const mostCommonType = () => { 
//   // TODO: return the most common type of volcano in the list

//   // let typeArray = [];
//   // let myObj = {};
//   let myArray = volcanoes.map(v => v.Type)
//                           .sort()
//                           .reduce(function(data,type,index){

//                           },
//                           {
//                             nostCommonCount: 0,
//                             mostCommonType: null,
//                             currentTypeCount: 0,
//                             currentType: null
//                           })
  
//   console.log(myArray);
                          // .forEach(i => {
                          //    if (!result.includes(i)) 
                          //        result.push(i)
                          //    });



  //                       //  .forEach( t => { 
  //                       //     if (!typeArray.includes(t)) {
  //                       //       myObj.Type=t;
  //                       //       myObj.Count=1;
  //                       //       typeArray.push(myObj);
  //                       //     } else {
  //                       //       typeArray.findIndex((x) => x === t ).Count++                                       
  //                       //     }
  //                       //  });

  // let result=typeArray;

//   let result = volcanoes.reduce(function(counts,vol) {
//     const t = vol.Type;

//     if(!counts[t]) {
//       counts[t] = 1;      
//     } else {
//       counts[t]++;
//     }

//     if(!counts.mostPopular || counts[t] >= counts[counts.mostPopular]) {
//       counts.mostPopular = t;
//     }

//     return counts;
//   }, {});

   
//   console.log(result);

//   return result.mostPopular;
// }

//---- Ian's super secret method

// function getMostCommon(occurranceByIndex, curType) {
//   if(occurranceByIndex.includes(curType)) {
//     const currentIdx = occurranceByIndex.lastIndexOf(curType);
//     occurranceByIndex[currentIdx+1] = curType;
//   }
//   else {occurranceByIndex[0] = curType};
//   return occurranceByIndex;
// }

// const mostCommon = volcanoes
//   .map(v => v.Type)
//   .sort()
//   .reduce(getMostCommon, [])
//   .pop()

//---- end of ISSM


// mostCommonType();

// FROM WORKSHOP ----

const mostCommonType = () => {
  // TODO: return the most common type of volcano in the list
  /*
  transform the data into an object like this:
  {
    "Caldera": 9999999,
    "Complex volcano": 999999
  }
  */

  // let result = volcanoes.reduce(function(counts, vol) {
  //   const t = vol.Type;

  //   if(!counts[t]) {
  //     counts[t] = 1;
  //   } else {
  //     counts[t]++;
  //   }

  //   if(!counts.mostPopular || counts[t] >= counts[counts.mostPopular]) {
  //     counts.mostPopular = t;
  //   }

  //   return counts;
  // }, {});

  // let result = volcanoes[0].Type;
  // for(let t in typeCounts) {
  //   if(typeCounts[t] >= typeCounts[result]) {
  //     result = t;
  //   }
  // }

  let types = volcanoes.map(v => v.Type);
  types.sort();

  let result = types.reduce(function(data, type) {
    if(data.currentType === type) {
      data.currentTypeCount++;
    } else {
      data.currentType = type;
      data.currentTypeCount = 1;
    }

    if(data.currentTypeCount >= data.mostCommonCount) {
      data.mostCommonType = type;
      data.mostCommonCount = data.currentTypeCount;
    }

    return data;
  }, {
    mostCommonCount: 0,
    mostCommonType: null,
    currentTypeCount: 0,
    currentType: null
  });

  // [{ type: 'happy volcano', count: 10  }, ...]
  // types.sort((a, b) => a.count - b.count);

  console.log(result);

  console.log(result.mostCommonType);
  return result.mostCommonType;
  // return result.mostPopular;
}

console.log ('--- Most Common Type of Volcano ---');

mostCommonType();



// END WORKSHOP


const eruptionsByCountry = (country) => {
  // TODO: return the number of eruptions when supplied a country as an argument
  let result = volcanoes.filter(v => v.Country === country).length;
              
  console.log(result);

  return result;   
}

console.log('--- Eruptions in specified country ---');

eruptionsByCountry('Italy');

const averageElevation = () => {
  // TODO: return the average elevation of all volcanoes
  let result = Math.floor(volcanoes.map(v => v.Elevation).reduce((s, e) => s + e)/volcanoes.length*100)/100; 
  console.log(result);
  return result;
}

console.log('--- Average Elevation of all Volcanoes ---');

averageElevation();

const volcanoTypes = () => {  
  // TODO: return an array of types of volcanoes
  let result = [];
  let myArray = volcanoes.map( v => v.Type)
                        .sort()
                        .forEach(i => {
                          if (!result.includes(i)) 
                            result.push(i)
                        });
                        

  console.log(result);

  return result;
}

console.log('--- Types of Volcanoes ---');

volcanoTypes();

const percentNorth = () => {
  // TODO: return the percentage of eruptions that occurred in the Northern hemisphere
  let result = Math.floor(volcanoes.filter(v => v.Longitude > 0).length/volcanoes.length*10000)/100;
  console.log(result + '%');

  return result + '%';
}

console.log('--- Percent of eruptions in Northern Hemisphere ---');

percentNorth();

const manyFilters = () => {  
  // TODO: return names of eruptions that occurred after 1800, that did not cause a tsunami, happened in the Southern hemisphere, and had a VEI of 5.
  let result =volcanoes.filter(v => v.Year > 1800)
                       .filter(v => v.Agent !== 'W')
                       .filter(v => v.Longitude < 0)
                       .filter(v => v.VEI === 5)
                       .map(v => v.Name);

  console.log(result);

  console.log(result.length);

  return result;
}

console.log('--- Eruptions after 1800, no tsunami, in Southern Hemisphere, and VEI of 5 ---')

manyFilters();

const elevatedVolcanoes = (elevation) => { 
  // TODO: return names of eruptions that occurred at or above an elevation passed as an argument
  let result = volcanoes.filter(v => v.Elevation >= elevation)
                        .map(v => v.Name);
  console.log(result);

  return result;
}

console.log('--- Eruptions above a specified elevation ---');

elevatedVolcanoes(5000);

let result = [];

const topAgentsOfDeath = (elevation) => {   
  // TODO: return the unique agents of death in the top ten deadliest eruptions
  let myArray = volcanoes.filter(v => v.DEATHS > '')
                        .filter(v => v.Agent > '')
                        .sort((a,b) => b.DEATHS - a.DEATHS)
                        .slice(0,10)
                        .map(v => v.Agent)
                        .forEach (a => {
                          elm=a.split(',');
                          elm.forEach(e => {
                            if (!result.includes(e))
                              result.push(e)
                          })
                        });

  console.log(result);

  return result;
};

console.log('--- Unique Agents of Death ---');

topAgentsOfDeath();