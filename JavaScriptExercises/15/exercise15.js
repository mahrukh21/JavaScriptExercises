/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.*/

arr = ["Zaynab", "Sila", "Aqsa"];
arr[2] = "Ayesha";

//informing people
console.log("Hey guys! good news we got a bigger dinner table so excited to invite more people.");

//adding one new guest at the begginning of the array
arr.unshift("Selena Gomez");
console.log("updated list after adding at the begginning:", arr );

//adding one new guest at middle of the array
arr.splice(2,0 ,"Olivia Rodrigo");
console.log("updated list after adding in the middle:" , arr );

//using push() to add new guest at the end
arr.push("Billie Eillsh");
console.log("after adding at the last", arr);

//new invitations
console.log("new updated list:");
console.log(arr[0], "I'd like to invite you over a dinner. Please Come :)");
console.log(arr[1], "I'd like to invite you over a dinner. Please Come :)");
console.log(arr[2], "I'd like to invite you over a dinner. Please Come :)");
console.log(arr[3], "I'd like to invite you over a dinner. Please Come :)");
console.log(arr[4], "I'd like to invite you over a dinner. Please Come :)");
console.log(arr[5], "I'd like to invite you over a dinner. Please Come :)");
