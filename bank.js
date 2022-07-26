const Bankdeposit = require("./Bankdeposit");
const Bankwithdrawal = require("./Bankwithdrawal");

class Bankaccount {
  constructor() {
    this.layout = "date || credit || debit || balance";
    this.balance = 0;
  }
  deposit(x) {
    return (this.layout = this.layout.concat(
      `\n${x.deposit_date()} || ${x
        .amount_deposited()
        .toFixed(2)} || || ${(this.balance += parseInt(
        x.amount_deposited(),
        10
      )).toFixed(2)}`
    ));
  }
  withdrawal() {}
  statement() {
    return this.layout;
  }
}

module.exports = Bankaccount;
