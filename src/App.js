import React from "react";
import Header from "./components/header";
import Balance from "./components/balance";
import IncomeExpense from "./components/incomeExpenses";
import TransactionList from "./components/transactionList";
import AddTransaction from "./components/addTransaction";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </React.Fragment>
  );
}

export default App;
