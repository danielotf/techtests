const Bankaccount = require("./Bankaccount");
const Bankstatement = require("./Bankstatement");
const Banktransaction = require("./Banktransaction");

describe(Bankaccount, () => {
  it("shows the statement with no transactions", () => {
    let account = new Bankaccount();
    let statement = new Bankstatement();
    expect(statement.print()).toEqual("date || credit || debit || balance");
  });

  it("shows a deposit of 1000 on 10-01-2023 ", () => {
    let account = new Bankaccount();
    let credit = new Banktransaction(1000, "10-01-2023");
    let account_statement = account.deposit(credit);
    let statement = new Bankstatement();
    expect(statement.print(account_statement)).toEqual(
      "date || credit || debit || balance\n10/01/2023 || 1000.00 || || 1000.00"
    );
  });

  it("shows a credit of 2000 on 13-01-2023 ", () => {
    let account = new Bankaccount();
    let credit = new Banktransaction(1000, "10-01-2023");
    account.deposit(credit);
    let credit2 = new Banktransaction(2000, "13-01-2023");
    let account_statement = account.deposit(credit2);
    console.log(account_statement);
    let statement = new Bankstatement();
    expect(statement.print(account_statement)).toEqual(
      "date || credit || debit || balance\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00"
    );
  });

  it("shows a debit of 500 on 10-01-2023 ", () => {
    let account = new Bankaccount();
    let debit = new Banktransaction(500, "14-01-2023");
    let account_statement = account.withdrawal(debit);
    let statement = new Bankstatement();
    expect(statement.print(account_statement)).toEqual(
      "date || credit || debit || balance\n14/01/2023 ||  ||500.00 || -500.00"
    );
  });

  it("shows a credit of 2000 on 13-01-2023 ", () => {
    let account = new Bankaccount();
    let credit = new Banktransaction(1000, "10-01-2023");
    account.deposit(credit);
    let credit2 = new Banktransaction(2000, "13-01-2023");
    account.deposit(credit2);
    let debit = new Banktransaction(500, "14-01-2023");
    let account_statement = account.withdrawal(debit);
    let statement = new Bankstatement();
    expect(statement.print(account_statement)).toEqual(
      "date || credit || debit || balance\n14/01/2023 ||  ||500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00"
    );
  });
});
