class Bankdeposit {
  constructor(x, y) {
    // deposit is passed as an integer
    this.deposit = x;
    // the date is passed as a string
    this.date = y;
  }

  amount_deposited() {
    return this.deposit;
  }
  deposit_date() {
    let date = this.date.replace(/-/g, "/");
    return date;
  }
}
module.exports = Bankdeposit;
