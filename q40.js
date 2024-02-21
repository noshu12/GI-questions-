// Define the make_album function with an optional parameter for the number of tracks
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Create dictionaries representing different albums using make_album function
var album1 = make_album("Artist1", "Album1");
var album2 = make_album("Artist2", "Album2", 12);
var album3 = make_album("Artist3", "Album3", 8);
// Print each return value to show that Objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
