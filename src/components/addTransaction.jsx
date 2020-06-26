import React from "react";

const AddTransaction = () => {
  return (
    <>
      <h3>Add new Transaction</h3>
      <form action="">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter Text..." />
        </div>
        <div className="form-control">
          <label htmlFor="text">
            Amount <br /> (negative - expense And Positive - income
          </label>
          <input type="number" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
