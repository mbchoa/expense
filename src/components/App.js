import React from 'react';

const App = (props) => {
  return (
    <div className="expense-app">
      <h1>Expense</h1>
      <div className="expense-list">Expenses List</div>
      <div className="expense-form">Add Expense Form</div>
      <h3 className="expense-app__total">Total Balance: </h3>
    </div>
  );
};

export default App;
