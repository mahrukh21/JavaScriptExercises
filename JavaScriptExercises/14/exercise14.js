/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/

arr = ["Zaynab", "Sila", "Aqsa"];
console.log(arr[2], "can't be there as she has something important to do");

//replacing
arr[2] = "Ayesha";

//new list
console.log("Updated List:");
console.log(arr[0], "I'd like to invite you over a dinner. Please Come :)");
console.log(arr[1], "I'd like to invite you over a dinner. Please Come :)");
console.log(arr[2], "I'd like to invite you over a dinner. Please Come :)");

