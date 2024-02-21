// Define the make_sandwich function
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich summary:");
    if (items.length === 0) {
        console.log(" - It's an empty sandwich!");
    }
    else {
        console.log(" - Your sandwich contains:");
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var item = items_1[_a];
            console.log("   - ".concat(item));
        }
    }
    console.log(); // Add an empty line for readability
}
// Call the function three times with different numbers of arguments
make_sandwich("Ham", "Cheese", "Lettuce", "Tomato");
make_sandwich("Peanut Butter", "Jelly");
make_sandwich("Turkey", "Bacon");
