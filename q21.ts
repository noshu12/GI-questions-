// Creating objects for different countries
let countries: { [key: string]: { capital: string, population: number, continent: string } } = {
    "USA": {
        capital: "Washington, D.C.",
        population: 331449281,
        continent: "North America"
    },
    "China": {
        capital: "Beijing",
        population: 1444216107,
        continent: "Asia"
    },
    "Brazil": {
        capital: "Brasília",
        population: 213993437,
        continent: "South America"
    },
    "France": {
        capital: "Paris",
        population: 65273511,
        continent: "Europe"
    },
    "South Africa": {
        capital: "Pretoria",
        population: 59622350,
        continent: "Africa"
    }
};

// Printing information about each country
console.log("Information about Different Countries:");
for (let country in countries) {
    console.log(`${country}: Capital - ${countries[country].capital}, Population - ${countries[country].population}, Continent - ${countries[country].continent}`);
}
