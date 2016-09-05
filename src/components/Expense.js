import React from 'react';

const Expense = ({ onClick, name, value }) => 
  <li>
    <span>{name}:</span><span>{`${value}`}</span>
  </li>

export default Expense;