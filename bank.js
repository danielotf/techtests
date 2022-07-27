const Bankdeposit = require("./Bankdeposit");
const Bankwithdrawal = require("./Bankwithdrawal");

class Bankaccount {
  constructor() {
    this.layout = "";
    this.balance = 0;
  }
  deposit(credit) {
    return (this.layout =
      "\n" +
      `${credit.deposit_date()} || ${credit
        .amount_deposited()
        .toFixed(2)} || || ${(this.balance += parseInt(
        credit.amount_deposited(),
        10
      )).toFixed(2)}` +
      this.layout);
  }
  withdrawal(debit) {
    return (this.layout =
      "\n" +
      `${debit.withdrawal_date()} ||  ||${debit
        .amount_withdrawn()
        .toFixed(2)} || ${(this.balance -= parseInt(
        debit.amount_withdrawn(),
        10
      )).toFixed(2)}` +
      this.layout);
  }
// make this another class
  statement() {
    let header = "date || credit || debit || balance";
    return header + this.layout;
  }
}

module.exports = Bankaccount;
