var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
// Make a copy of the array of magician's names
var magician_names_copy = __spreadArray([], magician_names, true);
// Call the make_great function with the copy of the array of magicians' names
var great_magicians = make_great(magician_names_copy);
// Call the show_magicians function with each array to show the changes
console.log("Original Magicians:");
show_magicians(magician_names);
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
