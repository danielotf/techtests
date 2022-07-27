const Bankaccount = require("./Bankaccount");
const Banktransaction = require("./Banktransaction");

class Bankstatement {
  constructor() {
    this.statement = "date || credit || debit || balance";
  }

  // to print bank statement
  print(account_statement) {
    if (account_statement != null) {
      return this.statement + account_statement;
    } else {
      return this.statement;
    }
  }
}

module.exports = Bankstatement;
