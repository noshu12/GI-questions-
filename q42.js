// Define the show_magicians function
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Define the make_great function
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        great_magicians.push("the Great ".concat(magician));
    }
    return great_magicians;
}
// Define an array of magician's names
var magician_names = ["David Copperfield", "Penn Jillette", "Teller", "Derren Brown"];
// Call the make_great function to modify the array of magicians
var great_magicians = make_great(magician_names);
// Call the show_magicians function to see that the list has actually been modified
show_magicians(great_magicians);
