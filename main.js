#!/usr/bin/env node 
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 12345;
let pinAnswer = await inquirer.prompt([{
        name: "q1",
        message: "enter your pin",
        type: "number"
    }]);
if (pinAnswer.q1 === myPin) {
    console.log("correct pin code");
    let opr = await inquirer.prompt([{
            name: "operations",
            message: "select one operations",
            type: "list",
            choices: ["withdraw", "Check Balance", "Fastcash"]
        }]);
    if (opr.operations === "withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "Enter the amount you want to withdraw",
                type: "number"
            }]);
        if (amountAns.amount < myBalance) {
            myBalance -= amountAns.amount;
            console.log("Now your balance is " + myBalance);
        }
        else {
            console.log("Insufficient balance");
        }
    }
    else if (opr.operations === "Check Balance") {
        console.log("your current balance is " + myBalance);
    }
    else if (opr.operations === "Fastcash") {
        let fast = await inquirer.prompt([{
                name: "fast",
                message: "How much money you want to withdraw",
                type: "list",
                choices: ["1000", "5000", "6000"],
            }]);
        if (fast.fast === "1000") {
            myBalance -= fast.fast;
            console.log(`your remaining balance is ${myBalance}`);
        }
        if (fast.fast === "5000") {
            myBalance -= fast.fast;
            console.log(`your remaining balance is ${myBalance}`);
        }
        if (fast.fast === "9000") {
            myBalance -= fast.fast;
            console.log(`your remaining balance is ${myBalance}`);
        }
    }
}
;
