/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/


//Tests for equality and inequality with strings
//True Equality
let num = '20';
if(num === '20')
{
    console.log('Equality!');
} 
else
{
    console.log('no equality!');
}

//False Equality
let num1 = '30';
if(num === '10')
{
    console.log('Equality!');
} 
else
{
    console.log('no equality!');
}

//True inequality 
let coder = 'mahrukh';
if(coder != 'someone_else')
{
    console.log('inequality is true!');
}
else
{
    console.log('no inequality!');
}

//False inequality 
let compiler = 'VsCode';
if(compiler != 'VsCode')
{
    console.log('inequality is true!');
}
else
{
    console.log('inequality is false!');
}

//Tests using the lower case function
//Lower Case True
let day = 'ThrUsDay';
if (day === 'ThrUsDay')
{
    console.log('lower case function True!')
}
else
{
    console.log('Lower case function false!');
}

//Lower Case false
let time = 'mOrning';
if (day === 'morning')
{
    console.log('lower case function True!')
}
else
{
    console.log('Lower case function false!');
}

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//equality
let a = 2;
let b = 2;

if(a === b)
{
    console.log('numbers are equal!');
}
else
{
    console.log('numbers are not equal!');
}

//inequality
let c = 3;
let d = 8;
if(c != d )
{
    console.log('numbers are not equal!');
}
else
{
    console.log('numbers are equal!');
}
// greater than
let e = 14;
let f = 7
if(e > f)
{
    console.log(e + "  is greater than " + f);
}
else
{
    console.log(e + "  is not greater than" + f);
}

if(e < f)
{
    console.log(e + " is less than " + f);
}
else
{
    console.log(e + " is not less than " + f);
}
//greater than or equal to
if (e >= f)
{
    console.log(e+ ' is greater than or equal to ' +f);
}
else{
    console.log(e+ ' is not greater than ' + f);
}
// less than or equal to
if (e <= f)
{
    console.log(e+ ' is less than or equal to ' +f);
}
else{
    console.log(e+ ' is not less than or equal to ' + f);
}
// Tests using "and" and "or" operators
//AND
if(e === f && e > f)
{
    console.log('AND conditon Applied and is true!')
}
else
{
    console.log('AND conditon Applied and is false!')
}
//OR

if(e === f || e > f)
{
    console.log('OR conditon Applied and is true!')
}
else
{
    console.log('OR conditon Applied and is false!')
}
//Test whether an item is in the array
arr = ['pink','red','green']
if (arr.includes('pink'))
{
    console.log('Array includes your item!');
}
else
{
    console.log('Array do not includes your item!');
}
//Test whether an item is not in the array
if( arr.includes('black'))
{
    console.log('Array includes your item!');
}
else
{
    console.log('Array do not includes your item!');
}

//THE ENDDDDD such a long exercise it was