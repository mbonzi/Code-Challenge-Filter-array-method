const pets = ["goldfish", "dog", "turtle", "tiger"]

//1 
const petsShortNames = pets.filter( word => word.length < 6 );
// The below line should console.log: ["dog", "tiger"]
console.log(petsShortNames);

//2 
const petsTNames = pets.filter( t => t.startsWith('t') );
// The below line should console.log: ["turtle", "tiger"] 
console.log(petsTNames);


const numbers = [3, 7, 4, 5, 10];

//3 
const numbersBiggerThanFour = numbers.filter(num => num > 4);
// The below line should console.log: [7, 5, 10]
console.log(numbersBiggerThanFour);

//Bonus 
const evenNumbers = numbers.filter(even => even%2==0);
// The below line should console.log: [4, 10]
console.log(evenNumbers);
