// Define the function to store information about a car
function store_car_info(manufacturer, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        for (var key in arg) {
            carInfo[key] = arg[key];
        }
    }
    return carInfo;
}
// Call the function with required information and additional name-value pairs
var car = store_car_info("Toyota", "Camry", { color: "Blue", year: 2022, price: 25000 });
;
// Print the object returned by the function to verify the stored information
console.log(car);
