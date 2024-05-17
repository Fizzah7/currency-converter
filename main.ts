#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.greenBright.bold("\n \t Welcome To Currency Exchange \n"))

// let enter the currency rate
let exchange_rate : any= {
    USD: 1,           //US Dollors
    EURO: 0.9,      //European Euros
    CAD: 1.,      //Canadian Dollors
    JPY: 155,    //Japenese Yen
    AED: 3.6,      //UAE Dirhams
    GBP: 0.8,     // British Pounds
    PKR: 278,  // pakistani Rupee
    INR:83,    // Indian Rupee
    AUD: 1.5,    //Australian Dollors
    TRL: 32.2,   //Turkish Lira 

};
let userAnswer = await inquirer.prompt ([
    {
        name: "from_currency",
        type: "list",
        message: chalk.magentaBright("Choose a currency to convert from:"),
        choices: ["USD", "EURO", "CAD","JPY", "AED", "GBP", "PKR", "INR", "AUD", "TRL"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.yellowBright("Choose a currency to convert into:"),
        choices: ["USD", "EURO", "CAD","JPY", "AED", "GBP", "PKR", "INR", "AUD", "TRL"]
    },
    {
        name: "Amount",
        type: "input",
        message: chalk.gray("Enter amount to convert:")
    },
]);

let from_amount = exchange_rate [userAnswer.from_currency];
let to_amount = exchange_rate [userAnswer.to_currency];
let amount = userAnswer.Amount ;

//putting formula for conversion

let baseAmount = amount/from_amount
let convertedAmount = baseAmount * to_amount

// Display converted amount

console.log(chalk.red(`Converted Amount: ${convertedAmount}` ))
console.log(chalk.greenBright.bold("\n \t \tThank You \n"))



