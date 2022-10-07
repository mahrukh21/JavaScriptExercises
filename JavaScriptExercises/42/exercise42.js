//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

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
var magician_name_copy
function make_great(magician_name){
    
    for(let i = 0; i < magician_name.length; i++){
        
        magician_name_copy.push("The Great "+ magician_name[i]);
    
    }

    return magician_name_copy;
}

make_great(magician_name);

show_magicians("Original Array: "+ magician_name);
show_magicians("Copy Array: "+ magician_name_copy);