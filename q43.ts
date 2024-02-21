// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define the make_great function
function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}

// Define an array of magician's names
const magician_names: string[] = ["David Copperfield", "Penn Jillette", "Teller", "Derren Brown"];

// Make a copy of the array of magician's names
const magician_names_copy: string[] = [...magician_names];

// Call the make_great function with the copy of the array of magicians' names
const great_magicians: string[] = make_great(magician_names_copy);

// Call the show_magicians function with each array to show the changes
console.log("Original Magicians:");
show_magicians(magician_names);
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
