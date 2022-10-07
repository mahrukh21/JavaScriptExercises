// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var uname= prompt("Enter Your Name");
console.log("Name with whitespaces:\t\t name \n");
console.log("Name after stripting the whitespaces:" + uname.trim());
alert("Name with whitespaces:\t\t name \n\n Name after stripting the whitespaces:" + uname.trim());