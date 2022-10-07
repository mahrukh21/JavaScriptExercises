/*City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
Call your function with at least three city-country pairs, and print the value that’s returned.
"Lahore, Pakistan"*/

function city_country(city, country)
{
       let strg = city + ", "+ country; 
       return strg;
}

console.log(city_country('faisalabad','Pakistan'));
console.log(city_country('NYC','America'));
console.log(city_country('Madrid','Spain'));