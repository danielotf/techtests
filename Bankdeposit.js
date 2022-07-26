class Bankdeposit {
  constructor(x, y) {
    this.deposit = x;
    this.date = y;
  }

  amount_deposited() {
    return this.deposit;
  }
  deposit_date() {
    return this.date;
  }
}
module.exports = Bankdeposit;
