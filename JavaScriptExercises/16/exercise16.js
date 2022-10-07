/* thrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/

arr = ["Zaynab","Sila","Selena gomez","Billie Eillsh","Olivia Rodrigo","Ayesha"];

// printing message
console.log("sorry now I can invite only two people for dinner.");

// Removing guests and printing them message
remove = arr.pop();
console.log("sorry", remove, "Can't invite you for dinner");
remove = arr.pop();
console.log("sorry", remove, "Can't invite you for dinner");
remove = arr.pop();
console.log("sorry", remove, "Can't invite you for dinner");
remove = arr.pop();
console.log("sorry", remove, "Can't invite you for dinner");

// Printing message to the people who are still in the list
console.log("hi!", arr[0], "you are invited for the dinner!");
console.log("hi!", arr[1], "you are invited for the dinner!");

//removing items, making the array list empty.
arr.pop();
arr.pop();
console.log("empty list:" , arr);
