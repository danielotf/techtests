const Bankdeposit = require("./Bankdeposit");
const Bankwithdrawal = require("./Bankwithdrawal");

class Bankaccount {
  constructor() {
    this.layout = "date || credit || debit || balance";
    this.balance = 0;
  }
  deposit(credit) {
    return (this.layout = this.layout.concat(
      `\n${credit.deposit_date()} || ${credit
        .amount_deposited()
        .toFixed(2)} || || ${(this.balance += parseInt(
        credit.amount_deposited(),
        10
      )).toFixed(2)}`
    ));
  }
  withdrawal(debit) {
    return (this.layout = this.layout.concat(
      `\n${debit.withdrawal_date()} ||  ||${debit
        .amount_withdrawn()
        .toFixed(2)} || ${(this.balance -= parseInt(
        debit.amount_withdrawn(),
        10
      )).toFixed(2)}`
    ));
  }

  statement() {
    return this.layout;
  }
}

module.exports = Bankaccount;
