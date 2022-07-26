class Bankwithdrawal {
  constructor(x, y) {
    this.withdrawal = x;
    this.date = y;
  }
  amount_withdrawn() {
    return this.withdrawal;
  }

  withdrawal_date() {
    return this.date;
  }
}
module.exports = Bankwithdrawal;
