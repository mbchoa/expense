import expenseApp from './index';
import { addExpense, removeExpense } from '../actions';
import { expect } from 'chai';

describe('Redux Reducers Tests', () => {
  it('should return the initial state', () => {
    expect(expenseApp(undefined, { type: '@@INIT' })).to.deep.equal({
      balance: 0,
      expenses: [],
    })
  });

  it('should return the input state if action type is not accounted for', () => {
    expect(expenseApp({
      balance: 914.34,
      expenses: [],
    }, { type: 'UNKNOWN_ACTION' })).to.deep.equal({
      balance: 914.34,
      expenses: [],
    });
  })

  it('should add expense to state object', () => {
    expect(expenseApp(undefined, addExpense('Paycheck', 3000)))
      .to.have.deep.property(
        'expenses[0].name', 'Paycheck',
      );
    expect(expenseApp(undefined, addExpense('Paycheck', 3000)))
      .to.have.deep.property(
        'expenses[0].value', 3000,
      );
  });

  it('should remove expense with valid id given', () => {
    const startingState = expenseApp(undefined, addExpense('Paycheck', 3000));
    expect(expenseApp(startingState, removeExpense(startingState.expenses[0].id)))
      .to.eql({
        balance: 0,
        expenses: [],
      });
  });

  it('should not change state if invalid id is given when remove expense action is received', () => {
    const startingState = expenseApp(undefined, addExpense('Paycheck', 3000));
    const newState = expenseApp(startingState, removeExpense(12312));
    expect(newState).to.have.deep.property('balance', 3000);
    expect(newState).to.have.deep.property('expenses[0].name', 'Paycheck');
    expect(newState).to.have.deep.property('expenses[0].value', 3000);
  });
});