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

// Call the make_great function to modify the array of magicians
const great_magicians: string[] = make_great(magician_names);

// Call the show_magicians function to see that the list has actually been modified
show_magicians(great_magicians);
