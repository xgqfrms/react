/*
immutable 不可变
*/

// mutable
var rooms = ["H1", "H2", "H3"];
rooms[2] = "Error H4";

console.log(rooms);




// no mutable
var rooms = ["H1", "H2", "H3"];
var newRooms = rooms.map(function (rm) {
    if (rm === "H3") {
        return "new H4";
    } else {
        return rm;
    }
})

console.log(newRooms);
console.log(rooms);


//ES6 

// mutable
let rooms = ["H1", "H2", "H3"];
rooms[2] = "Error H4";

console.log(rooms);




// no mutable
const rooms = ["H1", "H2", "H3"];
let newRooms = rooms.map(function (rm) {
    if (rm === "H3") {
        return "new H4";
    } else {
        return rm;
    }
})

console.log(newRooms);
console.log(rooms);

// ? still changed ?
rooms[2] = "Error H4";
console.log(rooms);

// string is immutable
let str = "123";
str[0] = "new";
console.log(str); 

