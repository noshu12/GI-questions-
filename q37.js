// Define the make_shirt function with default parameters
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt size is ".concat(size.toUpperCase(), " and the message printed on it is: \"").concat(message, "\""));
}
// Call the function to make a large shirt with the default message
make_shirt();
// Call the function to make a medium shirt with the default message
make_shirt("medium");
// Call the function to make a shirt of any size with a different message
make_shirt("small", "Hello, World!");
