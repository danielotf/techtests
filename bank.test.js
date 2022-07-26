const Bankaccount = require("./Bank");
const Bankdeposit = require("./Bankdeposit");
const Bankwithdrawal= require ('./Bankwithdrawal')
describe(Bankaccount, () => {
  it("shows the statement with no transactions", () => {
    let account = new Bankaccount();
    expect(account.statement()).toEqual("date || credit || debit || balance");
  });

  it("shows a deposit of 1000 on 10-01-2023 ", () => {
    let credit = new Bankdeposit(1000, "10-01-2023");
    let account = new Bankaccount();
    account.deposit(credit);
    expect(account.statement()).toEqual(
      "date || credit || debit || balance \n 10/01/2023 || 1000.00 || || 1000.00"
    );
  });

  it("shows a credit of 2000 on 13-01-2023 ", () => {
    let account = new Bankaccount();
    let credit = new Bankdeposit(1000, "10-01-2023");
    let credit2 = new Bankdeposit(2000, "13-01-2023");
    expect(account.statement()).toEqual(
      "date || credit || debit || balance \n  10/01/2023 || 1000.00 || || 1000.00 \n13/01/2023 || 2000.00 || || 2000 "
    );
  });

  it("shows a debit of 500 on 10-01-2023 ", () => {
    let account = new Bankaccount();
    let debit = new Bankwithdrawal(500, "14-01-2023");
    expect(account.statement()).toEqual(
      "date || credit || debit || balance \n 10/01/2023 ||  || 500.00 || - 500.00"
    );
  });

  it("shows a credit of 2000 on 13-01-2023 ", () => {
    let account = new Bankaccount();
    let credit = new Bankdeposit(1000, "10-01-2023");
    let credit2 = new Bankdeposit(2000, "13-01-2023");
    let debit = new Bankwithdrawal(500, "14-01-2023");
    expect(account.statement()).toEqual(
      "date || credit || debit || balance \n  10/01/2023 || 1000.00 || || 1000.00 \n13/01/2023 || 2000.00 || || 3000.00 \n 14/01/2023 || || 500.00 || 2500.00"
    );
  });
});
