import React from 'react'
import { connect } from 'react-redux'
import { addExpense } from '../redux-app/actions';

let AddExpense = ({ dispatch }) => {
  let expenseNameInput,
      expenseValueInput;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!expenseNameInput.value.trim()) {
          return
        }
        dispatch(addExpense(expenseNameInput.value, +expenseValueInput.value));
        expenseNameInput.value = '';
        expenseValueInput.value = '';
      }}>
        <input 
          ref={node => {
            expenseNameInput = node
          }}
          placeholder="Enter expense name" />
        <input 
          ref={node => {
            expenseValueInput = node
          }}
          placeholder="Enter expense value" />
        <button type="submit">
          Add Expense
        </button>
      </form>
    </div>
  )
}

AddExpense = connect()(AddExpense)

export default AddExpense