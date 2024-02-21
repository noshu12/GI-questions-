var guestList = ["Arham ul haq sheikh", "hammad babar", "Musab bin mohiuddin"];
var indexOfUnableGuest = guestList.indexOf("hammad babar");
if (indexOfUnableGuest !== -1) {
    console.log(guestList[indexOfUnableGuest] + " can't make it to the dinner.");
    guestList[indexOfUnableGuest] = "Marie Curie";
    guestList.forEach(function (person) {
        console.log("Dear " + person + ",\nYou are cordially invited to dinner. We would be honored to have your presence.\n\nSincerely,\nNOUSHAD ALAM\n");
    });
}
else {
    console.log("Sorry, the guest who can't make it was not found in the guest list.");
}
