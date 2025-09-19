// Jacob Phillips, 9.18.2025

// Note: I used template literals for this one because concatenating my strings and variables takes up more space.

let fullName = "Jacob Phillips";
let desiredSalary = 120000;
let veteranStatus = false;
let myFriends = ["Amelia", "Mackenzie", "Diana"];
let myFriendsSalaries = [115000, 125000, 130000];
let otherFriend = {
    firstName: "Krista",
    lastName: "Tatiana",
    desiredSalary: 110000
};

console.log(`Hello, my name is ${fullName} and my desired salary is $${desiredSalary}.`);
console.log(`I am a veteran: ${veteranStatus}.`);
console.log(`I also have three friends: ${myFriends[0]}, ${myFriends[1]}, and ${myFriends[2]}.`);
console.log(`Their desired salaries are $${myFriendsSalaries[0]}, $${myFriendsSalaries[1]}, and $${myFriendsSalaries[2]}.`);
console.log(`I also have another friend. Her name is ${otherFriend.firstName} ${otherFriend.lastName} and she has a desired salary of $${otherFriend.desiredSalary}.`);