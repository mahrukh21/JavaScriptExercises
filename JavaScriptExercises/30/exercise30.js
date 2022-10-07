/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/

arr = ['meerha','meeral','azqa','yushfa','admin'];

//Remove all of the usernames from your array.
while(arr.length > 0)
    {
    arr.pop();
    }
 console.log('Empty array: ',arr);


 // If the list is empty, print the message We need to find some users!
if (arr == '')
{
    console.log(' We need to find some users!')
}