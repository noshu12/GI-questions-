let mountainList: string[] = [
    "Mount Everest",
    "K2",
    "Kangchenjunga",
    "Lhotse",
    "Makalu",
    "Cho Oyu",
    "Annapurna",
    "Dhaulagiri",
    "Manaslu",
    "Nanga Parbat"
];

console.log("List of Famous Mountains:");
mountainList.forEach(mountain => {
    console.log("- " + mountain);
});
