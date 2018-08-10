const fs = require('fs');
const volcanoes = JSON.parse(fs.readFileSync('./volcano.json'));

class VolcanoAnalyzer {
    // Return the volcanoes that erupted in the 1980s.

    eruptedInEighties() {
        const result = volcanoes.filter(volcano => volcano.Year > 1979 && volcano.Year < 1990);
        console.log(result);
    }

    // Return an array of the names of volcanoes that have a VEI of 6 or higher.

    highVEI() {
        const result = volcanoes.filter(volcano => volcano.VEI >= 6)
            .map(volcano => volcano.Name);
        console.log(result);
    }

    // Return the volcano with the highest recorded deaths.

    mostDeadly() {
        const result = volcanoes.reduce((max, curr) => {
            if (curr.DEATHS >= max.DEATHS) return curr;
            else return max;
        });
        console.log(result);
    }

    // Return the percentage of volcanoes that caused tsunamis.

    causedTsunamiLong() {
        const tsunamis = [];
        for (let volcano of volcanoes) {
            if (volcano.TSU) {
                tsunamis.push(volcano);
            }
        }
        return (tsunamis.length / volcanoes.length) * 100;
    }

    causedTsunami() {
        const tsunamis = volcanoes.filter(volcano => volcano.TSU);
        return (tsunamis.length / volcanoes.length) * 100;
    }

    // Return the most common type of volcano in the list

    mostCommonType() {
        let types = {};
        volcanoes.forEach(volcano => types.hasOwnProperty(volcano.Type) ? (types[volcano.Type] += 1) : (types[volcano.Type] = 1));
        let mostCommon = '';
        let numberOfMostCommon = 0;
        for (const type in types) {
            if (types[type] >= numberOfMostCommon) {
                numberOfMostCommon = types[type];
                mostCommon = type;
            }
        }
        return mostCommon;
    }

    // Return the number of eruptions when supplied a country as an argument

    eruptionsByCountry(country) {
        const result = volcanoes.filter(volcano => volcano.Country === country).length;
        return result;
    }

    // Return the average elevation of all volcanoes

    averageElevation() {
        const result = volcanoes.map(volcano => volcano.Elevation)
            .reduce((total, curr) => {
                total += curr;
                return total;
            }, 0) / volcanoes.length;
        return result.toFixed(2);
    }

    // Return an array of types of volcanoes

    volcanoTypes() {
        let seen = {};
        const result = volcanoes.map(volcano => volcano.Type)
            .reduce((acc, curr) => acc.concat(curr), [])
            .filter(type => seen.hasOwnProperty(type) ? false : seen[type] = true);
        return result;
    }

    volcanoTypesNoHOF() {
        let types = [];
        for (const volcano of volcanoes) {
            types.push(volcano.Type);
        }
        let uniqueTypes = [];
        for (const type of types) {
            if (uniqueTypes.indexOf(type) === -1) {
                uniqueTypes.push(type);
            }
        }
        return uniqueTypes;
    }

    // Return the percentage of eruptions that occurred in the Northern hemisphere

    percentNorth() {
        const northernVolcanoes = volcanoes.filter(volcano => volcano.Latitude > 0);
        return (northernVolcanoes.length / volcanoes.length) * 100;
    }

    // Return names of eruptions that occurred after 1800, that did not cause a tsunami, happened in the Southern hemisphere, and had a VEI of 5.

    manyFilters() {
        const filtredVolcanoes = volcanoes.filter(volcano => volcano.Year > 1800)
            .filter(volcano => !volcano.TSU)
            .filter(volcano => volcano.Latitude < 0)
            .filter(volcano => volcano.VEI === 5)
            .map(volcano => volcano.Name);
        return filtredVolcanoes;
    }

    // Return names of eruptions that occurred at or above an elevation passed as an argument

    elevatedVolcanoes(elevation) {
        const elevatedVolcanoes = volcanoes.filter(volcano => volcano.Elevation >= elevation)
            .map(volcano => volcano.Name);
        return elevatedVolcanoes;
    }

    elevatedVolcanoesNoHOF(elevation) {
        let elevatedVolcanoes = [];
        for (const volcano of volcanoes) {
            if (volcano.Elevation >= elevation) {
                elevatedVolcanoes.push(volcano.Name);
            }
        }
        return elevatedVolcanoes;
    }
    topAgentsOfDeath(){
        const sorted = volcanoes.sort((a, b) => a.DEATHS < b.DEATHS ? 1 : -1)
        const top10 = sorted.slice(0,10)
        const top10CausesOfDeathNotNormalized = top10.map(volcano => volcano.Agent).filter(ele=>ele).join(',').split(',')
        const top10CausesOfDeathNormalized = [...new Set(top10CausesOfDeathNotNormalized)]
        return top10CausesOfDeathNormalized
    }
}


const volcanoAnalyzer = new VolcanoAnalyzer();

// volcanoAnalyzer.eruptedInEighties();
// volcanoAnalyzer.highVEI();
// volcanoAnalyzer.mostDeadly();
// console.log(volcanoAnalyzer.causedTsunamiLong());
// console.log(volcanoAnalyzer.mostCommonType());
// console.log(volcanoAnalyzer.eruptionsByCountry('United States'));
// console.log(volcanoAnalyzer.eruptionsByCountry('Indonesia'));
// console.log(volcanoAnalyzer.eruptionsByCountry('Zimbabwe'));
// console.log(volcanoAnalyzer.averageElevation());
// console.log(volcanoAnalyzer.volcanoTypes());
// console.log(volcanoAnalyzer.volcanoTypesNoHOF());
// console.log(volcanoAnalyzer.percentNorth());
// console.log(volcanoAnalyzer.manyFilters());

// console.log(volcanoAnalyzer.elevatedVolcanoesNoHOF(4990));
console.log(volcanoAnalyzer.topAgentsOfDeath())
