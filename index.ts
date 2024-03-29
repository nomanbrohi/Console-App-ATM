#! /usr/bin/env node

import inquirer from "inquirer";

// make a variable for pin and balace
const userPin: number = 1234;
let balance: number = 3000;

// ask for pin
const pass = await inquirer.prompt({
  message: "Please Enter Your Pin: ",
  name: "pin",
  type: "number",
});

// if pin verified
if (pass.pin === userPin) {
  console.log("User Verified");
  console.log(`Your Balance : ${balance}`);
  //ask option for cash withdrawal
  const options = await inquirer.prompt({
    message: "Please Select An Option: ",
    name: "option",
    type: "list",
    choices: ["Withdrawal", "Fast Cash", "Check Balance"],
  });
  //if user select withdrawal option
  if (options.option === "Withdrawal") {
    const enterAmount = await inquirer.prompt({
      message: "Enter Amount: ",
      name: "amount",
      type: "number",
    });
    // check if the user input amount less than or equal to balance
    if (enterAmount.amount <= balance) {
      balance -= enterAmount.amount;
      console.log(`${enterAmount.amount} has been debited from your account`);
      console.log(`Your Remaining Balance ${balance}`);
      console.log("!!Thank you for using!! ");
      // otherwise print this message
    } else {
      console.log("insufficient Balance");
    }
    // check if the user select Fast Cash option
  } else if (options.option === "Fast Cash") {
    //show user Fast Cash amount
    const _select = await inquirer.prompt({
      message: "Select Amount: ",
      name: "selectAmount",
      type: "list",
      choices: ["500", "1000", "2000", "5000"],
    });
    // check if the user select amount less than or equal to balance
    if (_select.selectAmount <= balance) {
      balance -= _select.selectAmount;
      console.log(`${_select.selectAmount} has been debited from your account`);
      console.log(`Your Remaining Balance ${balance}`);
      console.log("!!Thank you for using!! ");
      // otherwise print this message
    } else {
      console.log("Insufficient Balance");
    }
    // if user select Check Balance option
  } else {
    console.log(`Your Current Balance ${balance}`);
  }
  // Check if the user input alphabet
} else if (isNaN(pass.pin)) {
  console.log("Accept Only Numbers");
} //if user enter wrong pin
else {
  console.log("Wrong Pin");
}
