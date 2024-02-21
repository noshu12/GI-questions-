// Define the function to store information about a car
function store_car_info(manufacturer: string, model: string, ...args: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
    const carInfo: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };
    for (let arg of args) {
        for (let key in arg) {
            carInfo[key] = arg[key];
        }
    }
    return carInfo;
}

// Call the function with required information and additional name-value pairs
const car = store_car_info("Toyota", "Camry", { color: "Blue", year: 2022, price: 25000 });
;

// Print the object returned by the function to verify the stored information
console.log(car);
