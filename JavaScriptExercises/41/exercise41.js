//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magician_name = ["mark", "David", "stephen", "frank"];

function show_magicians(magician_name)
{
    console.log(magician_name);
}

function make_great(arr)
{
    for(let i = 0; i < arr.length; i++) 
    {
        arr[i] = "The Great " + arr[i];
    }
    return arr;
}

make_great(magician_name);
show_magicians(magician_name);