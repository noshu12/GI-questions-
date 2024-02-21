// Define current users and new users lists
const current_users: string[] = ["john", "alice", "bob", "charlie", "david"];
const new_users: string[] = ["john", "jane", "alex", "emily", "bob"];

// Loop through new_users list
for (let new_user of new_users) {
    // Check if the new username exists in current_users (case insensitive)
    const isUsernameTaken = current_users.some(user => user.toLowerCase() === new_user.toLowerCase());
    
    // Print appropriate message based on username availability
    if (isUsernameTaken) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
}