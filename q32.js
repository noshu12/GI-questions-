// Define current users and new users lists
var current_users = ["john", "alice", "bob", "charlie", "david"];
var new_users = ["john", "jane", "alex", "emily", "bob"];
var _loop_1 = function (new_user) {
    // Check if the new username exists in current_users (case insensitive)
    var isUsernameTaken = current_users.some(function (user) { return user.toLowerCase() === new_user.toLowerCase(); });
    // Print appropriate message based on username availability
    if (isUsernameTaken) {
        console.log("Sorry, the username '".concat(new_user, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_user, "' is available."));
    }
};
// Loop through new_users list
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    _loop_1(new_user);
}
