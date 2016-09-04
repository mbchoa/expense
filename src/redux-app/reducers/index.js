/**
 * State object will look like:
 * {
 *   balance: 916.43,
 *   expenses: [
 *     {
 *       name: 'Paycheck',
 *       value: 3101.43,
 *       id: 234113
 *     },
 *     {
 *       name: 'Parents Plane Tickets',
 *       value: 2700,
 *       id: 123133
 *     }
 *   ]
 * }
 */

const initialState = {
  balance: 0,
  expenses: [],
};

const expenseApp = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return Object.assign({}, state, {
        balance: state.balance + action.payload.value,
        expenses: [
          ...state.expenses,
          {
            name: action.payload.name,
            value: action.payload.value,
            id: action.payload.id,
          }
        ]
      });
    case 'REMOVE_EXPENSE':
      const expense = state.expenses
        .find(expense => expense.id === action.payload);
      return Object.assign({}, state, {
        balance: state.balance - (expense ? expense.value : 0),
        expenses: state.expenses
          .filter(expense => expense.id !== action.payload),
      })
    default:
      return state;
  }
}

export default expenseApp;
