const Bankdeposit = require("./Bankstatement");
const Banktransaction = require("./Banktransaction");

class Bankaccount {
  constructor() {
    this.layout = "";
    this.balance = 0;
  }
  deposit(credit) {
    return (this.layout =
      "\n" +
      `${credit.transaction_date()} || ${credit
        .deposit_amount()
        .toFixed(2)} || || ${(this.balance += parseInt(
        credit.deposit_amount(),
        10
      )).toFixed(2)}` +
      this.layout);
  }
  withdraw(debit) {
    return (this.layout =
      "\n" +
      `${debit.transaction_date()} ||  ||${debit
        .withdrawal_amount()
        .toFixed(2)} || ${(this.balance -= parseInt(
        debit.withdrawal_amount(),
        10
      )).toFixed(2)}` +
      this.layout);
  }
}

module.exports = Bankaccount;
