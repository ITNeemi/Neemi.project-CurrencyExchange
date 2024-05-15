#! /usr/bin/env node
import {log} from "console";

import inquirer from "inquirer";

let  Currency_converter = 
{
    "USD":

    {"USD":1,
    "EUR": 0.92,
    "PKR":278,    
    },

    "EUR":
    {"USD":1.08,
    "EUR": 1,
    "PKR":300,    
    },

     "PKR":
    {"USD":0.0036,
    "EUR": 0.0033,
    "PKR":1,    
    }
 }

 //INPUT PROMT
  const answer :{
    from:"USD" | "EUR" | "PKR",
    to:"USD" | "EUR" | "PKR",
    amount: number,
 }
 = await inquirer.prompt
 (
    [
         {
          name:"from",
          message:"Enter your  Currency which you want change?",
          type: "list",
          choices: ['USD', 'EUR',  'PKR',  ]
        },
        {
            name:"to",
            message:"Select which currency you want convert? ",
            type: "list",
            choices:  ['USD', 'EUR',  'PKR',  ]
        },
        {
            name:"amount",
            message:"Enter your amount",
            type: "number",
            choices:  ['USD', 'EUR',  'PKR',  ]

        },
    ]
 
)

const {from  ,to,amount} = answer;

// conversion
if(from && to && amount){
 let result = Currency_converter [from][to] * amount;
 console.log(`your onversion from ${from} to ${to} is ${result}`);
 
} else{
    console.log("invalid");
    
}


