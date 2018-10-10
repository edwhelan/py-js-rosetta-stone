// yeah its javascript 
// print text
console.log('Hello javascrrripttta');

// prompt user const, let, var
// const promptText = prompt('What is your name? ');
const userName = `Sven`;
// concatenate for interpolation #cashcurly$$$$
// template literals `${yourVarHere}`
const greeting =  `Hello, ${userName}!`;

console.log(greeting)
// string interpolation

const name = `Johnny-five`;
const subject = `Wizardry`;
const action = `spellcasting`;

// hipster strings or CASHstrings
const finalText = `${name} is the words best at ${action}. They went to school for ${subject}`;
console.log(finalText);

let theDay = prompt(`Day (0-6)?`)
theDay = parseInt(theDay, 10)
// const theDay = 5;
let dayName = ``;

if (theDay === 0){
    dayName = `Sunday`;
}
if (theDay === 1){
    dayName = `Monday`;
}
if (theDay === 2){
    dayName = `Tuesday`;
}
if (theDay === 3){
    dayName = `Wednesday`;
}
if (theDay === 4){
    dayName = `Thursday`;
}
if (theDay === 5){
    dayName = `Friday`;
}
if (theDay === 6){
    dayName = `Saturday`;
}

console.log(dayName)

// python 102 and 103 in js;

//Tip converter function
const addItAllUp = () => {
    let mealTotal = prompt(`What is the total of your meal?`);
    let serviceLevel = prompt(`How was the service? ('good, fine, or bad')`);
    let split = prompt(`Number of people splitting the total?`);
    mealTotal = parseInt(mealTotal, 10);
    

    //function to convert service into tip amount
    let tipTotal = (inputedServiceLevel) =>{
        if(inputedServiceLevel == `good`){
                tipTotal = mealTotal * 0.2;
        } else if(inputedServiceLevel == `fine`){
            tipTotal = mealTotal * 0.15;
        } else {
            tipTotal = mealTotal * 0.1;
        }
    };

    tipTotal(serviceLevel);

    const mealTipTotal = tipTotal + mealTotal;
    const splitTotal = mealTipTotal / split;

    return console.log(`You tipped ${tipTotal}, your total with tip was ${mealTipTotal}. Split $${split} ways it would be $${splitTotal}`);
};

// addItAllUp(); commented out 


// let inputedValue = prompt(`What is your temperature in degrees celcius?`);

const farenheitConverter = (numberToConvert) => {
    inputedValue = parseFloat(numberToConvert);
    return (numberToConvert * 1.8 + 32).toFixed(2);
};

// console.log(farenheitConverter(inputedValue));

// const whatIsTheDay = prompt(`What is the day?(0-6)`)
const doIGoToWork = (day) => {
    if ((day < 1 ) || (day > 5)) {
        return (`Sleep in. Hooraaaaay!`);
    } else {
        return (`Go to work fool.`);
    }
}
// console.log(doIGoToWork(whatIsTheDay));


for(let count = 0; count < 10; count++) {
    console.log(count);
}