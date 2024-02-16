function titleCase(str: string): string {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

let personName: string = "arham ul sheikh";

console.log("Lowercase: ", personName.toLowerCase());
console.log("Uppercase: ", personName.toUpperCase());
console.log("Titlecase: ", titleCase(personName));
