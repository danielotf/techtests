# Techtest

Requirements:

<!-- - You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything). -->

# Acceptance criteria:

<!-- - Given a client makes a deposit of 1000 on 10-01-2023
- And a deposit of 2000 on 13-01-2023
- And a withdrawal of 500 on 14-01-2023
- When she prints her bank statement
- Then she would see:  -->

date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00

# APPROACH

I approached the problem by first confirming the criteria required and then mapping out how many classes and functions that would be needed to implement the code. I also ensured that I followed the Single Responsibility responsible as I derived the solution, ensuring that each class and its corresponding functions, each had their specific use.

# STRUCTURE

I have one test file: Bank.test.js, and three other files, I used for the classes: Bank.js, Bankwithdrawal.js, Bankdeposit.js.

-The Bank.js file has a Bankaccount class which has a constructor that intiates a layout for the bank statement and also an initial balance of zero. Its first two functions, deposit, and withdrawal take one parameter each. These first two functions are also dependent on the Bankwithdrawal and Bankdeposit classes, which are in their respective JS files. The last function in the Bank file is the statement function which returns the layout of the Bankaccount with any transactions that may have occurred.

-The Bankdeposit class located in the Bankdeposit.js file has two functions amount_deposited() and date_deposited(), which return the date and time of the deposit transaction respectively.

-The Bankwithdrawal class located in the Bankwithdrawal.js file has two functions amount_withdrawn() and withdrawal_date(), which return the date and time of the withdrawal transaction respectively.

# INSTALLATION AND RUNNING OF TESTS

We used tests to run jests using npm, and we also used npm to set up our environment:

# To Setup environment to use node's latest version

nvm use node

# Initialise the NPM project (this will create a file package.json)

npm init -y

# Add the jest package to our project(this will update package.json and package-lock.json)

    npm add jest

# Run our tests

jest
