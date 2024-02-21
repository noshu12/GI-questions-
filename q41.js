// Define the show_magicians function
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Define an array of magician's names
var magician_names = ["David Copperfield", "Penn Jillette", "Teller", "Derren Brown"];
// Call the function with the array of magician's names
show_magicians(magician_names);
