import { createStore } from 'redux';
import todoApp from './reducers';
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './actions';
const store = createStore(todoApp, window.STATE_FROM_SERVER);

console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addTodo('Learn about reducers'));
