import { createStore } from 'redux';
import todoApp from './js/reducers';
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  Visibility_Filters
} from './js/actions';
const store = createStore(todoApp, window.STATE_FROM_SERVER);

console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addTodo('Learn about reducers'));
