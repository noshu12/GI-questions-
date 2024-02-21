var guestList = ["Albert Einstein", "Ada Lovelace", "Leonardo da Vinci", "Marie Curie"];
// Print the number of people being invited to dinner
console.log("Number of people invited to dinner: " + guestList.length);
// Informing about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");
// Adding new guests to the list
guestList.unshift("Isaac Newton"); // Adding to the beginning
guestList.splice(Math.floor(guestList.length / 2), 0, "Nikola Tesla"); // Adding to the middle
guestList.push("Stephen Hawking"); // Adding to the end
// Printing invitation messages for each person in the list
guestList.forEach(function (person) {
    console.log("Dear " + person + ",\nYou are cordially invited to dinner. We would be honored to have your presence.\n\nSincerely,\n[Your Name]");
});
