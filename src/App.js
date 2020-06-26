import React from "react";
import Header from "./components/header";
import Balance from "./components/balance";
import IncomeExpense from "./components/incomeExpenses";
import TransactionList from "./components/transactionList";
import AddTransaction from "./components/addTransaction";
import "./App.css";
import { GlobleProvider, GlobalProvider } from "./context/globalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
