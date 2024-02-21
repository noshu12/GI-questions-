var guestList = ["Albert Einstein", "Ada Lovelace", "Leonardo da Vinci", "Marie Curie"];
console.log("Good news! We found a bigger dinner table.");
guestList.unshift("Isaac Newton"); // Adding to the beginning
guestList.splice(Math.floor(guestList.length / 2), 0, "Nikola Tesla"); // Adding to the middle
guestList.push("Stephen Hawking"); // Adding to the end
guestList.forEach(function (person) {
    console.log("Dear " + person + ",\nYou are cordially invited to dinner. We would be honored to have your presence.\n\nSincerely,\nNOUSHAD ALAM\n");
});
