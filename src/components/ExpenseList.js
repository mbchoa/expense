import React from 'react';
import Expense from './Expense';

const ExpenseList = ({ expenses }) => 
  <ul className="expense-list">
    {expenses.map(expense => 
      <Expense
        key={expense.id}
        {...expense}
      />
    )}
  </ul>

export default ExpenseList