import { addExpense, removeExpense } from './index';
import { expect } from 'chai';

describe('Redux Actions Tests', () => {
  it('addExpense action creator should return appropriate object', () => {
    expect(addExpense('Paycheck', 3100)).to.deep.equal({
      type: 'ADD_EXPENSE',
      payload: {
        name: 'Paycheck',
        value: 3100,
      },
    });
  });

  it('removeExpense action creator should return appropriate object', () => {
    expect(removeExpense(3)).to.deep.equal({
      type: 'REMOVE_EXPENSE',
      payload: 3,
    });
  });
});