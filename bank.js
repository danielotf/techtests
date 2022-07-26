class Bankaccount {
  constructor() {
    this.layout = "date || credit || debit || balance";
  }
  deposit() {}
  withdrawal() {}
  statement() {
    return this.layout;
  }
}

module.exports = Bankaccount;
