var guestList = ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Ada Lovelace", "Leonardo da Vinci", "Marie Curie", "Stephen Hawking"];
// Informing about the limited space for dinner
console.log("Unfortunately, the new dinner table won’t arrive in time, and we can only invite two people for dinner.");
// Removing guests from the list until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, " + removedGuest + ", we can't invite you to dinner.");
}
// Printing invitation messages to the two remaining guests
guestList.forEach(function (person) {
    console.log("Dear " + person + ",\nYou are still cordially invited to dinner. We would be honored to have your presence.\n\nSincerely,\n[Your Name]");
});
// Removing the last two names from the list
guestList.pop();
guestList.pop();
// Printing to make sure the list is empty
console.log("Remaining guests list:", guestList);
