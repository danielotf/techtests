

class Banktransaction {
  constructor(amount, transaction_date) {
    // amount is passed as an integer
    this.transaction = amount;
    // the date is passed as a string
    this.date = transaction_date;
  }

  deposit_amount() {
    return this.transaction;
  }
  withdrawal_amount() {
    return this.transaction;
  }

  transaction_date() {
    let date = this.date.replace(/-/g, "/");
    return date;
  }
}
module.exports = Banktransaction;
