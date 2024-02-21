// Define the make_sandwich function
function make_sandwich(...items: string[]): void {
    console.log("Sandwich summary:");
    if (items.length === 0) {
        console.log(" - It's an empty sandwich!");
    } else {
        console.log(" - Your sandwich contains:");
        for (let item of items) {
            console.log(`   - ${item}`);
        }
    }
    console.log(); // Add an empty line for readability
}

// Call the function three times with different numbers of arguments
make_sandwich("Ham", "Cheese", "Lettuce", "Tomato");
make_sandwich("Peanut Butter", "Jelly");
make_sandwich("Turkey", "Bacon");
