# Higher-Order Functions with Volcanoes

## Objectives

* Use higher-order functions to manipulate data about historical volcanic eruptions

## Instruction

Write your code in `volcano.js`.
Use `node volcano.js` to run.

`volcano.json` contains a data set of 804 historical volcanic eruptions.  Below is a sample of the data for each eruption.

```JSON
  {
    "Year": 1362,
    "TSU": "",
    "EQ": "",
    "Name": "Oraefajokull",
    "Location": "Iceland-SE",
    "Country": "Iceland",
    "Latitude": 64,
    "Longitude": -16.65,
    "Elevation": 2119,
    "Type": "Stratovolcano",
    "VEI": 5,
    "Agent": "T,F",
    "DEATHS": 220
  }
```

Use `filter`, `map`, `reduce` and any other higher-order functions to analyze the data in the following ways:

1. Return the volcanoes that erupted in the 1980s.
1. Return an array of the names of volcanoes that had an eruption with a Volcanic Explosivity Index (VEI) of 6 or higher.
1. Return the eruption with the highest number of recorded deaths.
1. Return the percentage of eruptions that caused tsunamis.
1. Return the most common type of volcano in the set.
1. Return the number of eruptions when supplied a country as an argument.
1. Return the average elevation of all eruptions.
1. Return an array of types of volcanoes.
1. Return the percentage of eruptions that occurred in the Northern Hemisphere.
1. Return the names of eruptions that occurred after 1800, that did NOT cause a tsunami, happened in the Southern Hemisphere, and had a VEI of 5.
1. Return the names of eruptions that occurred at or above an elevation passed in as an argument.
1. Return the agents of death for the ten most deadly eruptions.

Key for Agents of Death:
![Key for Agents of Death](./agents.png)

### References

Volcano data retrieved from: National Geophysical Data Center / World Data Service (NGDC/WDS): Significant Volcanic Eruptions Database. National Geophysical Data Center, NOAA. [doi:10.7289/V5JW8BSH](https://data.nodc.noaa.gov/cgi-bin/iso?id=gov.noaa.ngdc.mgg.hazards:G10147)
