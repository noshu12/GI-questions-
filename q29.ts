// Define an array of favorite fruits
const favorite_fruits: string[] = ["banana", "apple", "strawberry"];

// Check if each fruit is in the favorite_fruits array using individual if statements
if (favorite_fruits.indexOf("banana") !== -1) {
    console.log("You really like bananas!");
}

if (favorite_fruits.indexOf("apple") !== -1) {
    console.log("You really like apples!");
}

if (favorite_fruits.indexOf("strawberry") !== -1) {
    console.log("You really like strawberries!");
}

if (favorite_fruits.indexOf("orange") !== -1) {
    console.log("You really like oranges!");
} else {
    console.log("Oranges are not one of your favorite fruits.");
}

if (favorite_fruits.indexOf("grape") !== -1) {
    console.log("You really like grapes!");
} else {
    console.log("Grapes are not one of your favorite fruits.");
}
