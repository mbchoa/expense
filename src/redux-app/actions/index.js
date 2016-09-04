import { createAction } from 'redux-actions';
import uniqueId from 'lodash.uniqueid';

/*
 * action types
 */ 

export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

/*
 * action creators
 */

const addExpense = createAction(ADD_EXPENSE, (name, value) => (
  { name, value, id: uniqueId() }
));
const removeExpense = createAction(REMOVE_EXPENSE)
export { addExpense, removeExpense };


