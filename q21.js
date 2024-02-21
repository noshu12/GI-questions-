// Creating objects for different countries
var countries = {
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
for (var country in countries) {
    console.log("".concat(country, ": Capital - ").concat(countries[country].capital, ", Population - ").concat(countries[country].population, ", Continent - ").concat(countries[country].continent));
}
