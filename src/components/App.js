import React from 'react';
import { connect } from 'react-redux';
import VisibleExpenseList from '../containers/VisibleExpenseList';
import AddExpense from '../containers/AddExpense';

const App = ({ balance }) => {
  return (
    <div className="expense-app">
      <h1>Expense</h1>
      <VisibleExpenseList />
      <AddExpense />
      <h3 className="expense-app__total">Total Balance: {balance}</h3>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    balance: state.balance,
  }
};

const AppContainer = connect(
  mapStateToProps,
)(App);

export default AppContainer;
