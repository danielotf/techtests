class Bankwithdrawal {
  constructor(x, y) {
    // withdrawal is passed as an integer
    this.withdrawal = x;
    // the date is passed as a string
    this.date = y;
  }
  amount_withdrawn() {
    return this.withdrawal;
  }

  withdrawal_date() {
    let date = this.date.replace(/-/g, "/");
    return date;
  }
}
module.exports = Bankwithdrawal;
