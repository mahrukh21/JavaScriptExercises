// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var username = prompt("Enter your name.");
var uc = username.toUpperCase();
var lc = username.toLocaleLowerCase();
function titlecase(tc)
{
    var tc = username.toLowerCase().split(" ");
    for(i=0; i< tc.length; i++)
        {
          tc[i] = tc[i][0].toUpperCase() + tc[i].slice(1);
        }
return tc.join(" ");
}
console.log(titlecase());
console.log("UpperCase = " + uc);
console.log("LowerCase = " + lc);
alert("UpperCase = " + uc + "\nLowerCase = " + lc + "\nTittleCase = " + titlecase());