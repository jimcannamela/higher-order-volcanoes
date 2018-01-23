const fs = require('fs');
const volcanoes = JSON.parse(fs.readFileSync('./volcano.json'));

class VolcanoAnalyzer {
    // Return the volcanoes that erupted in the 1980s.

    eruptedInEighties() {
        const result = // your code goes here
        console.log(result);
    }

}

const volcanoAnalyzer = new VolcanoAnalyzer();

volcanoAnalyzer.eruptedInEighties();
