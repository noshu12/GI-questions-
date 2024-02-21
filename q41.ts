// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define an array of magician's names
const magician_names: string[] = ["David Copperfield", "Penn Jillette", "Teller", "Derren Brown"];

// Call the function with the array of magician's names
show_magicians(magician_names);
