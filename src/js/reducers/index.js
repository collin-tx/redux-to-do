import { combineReducers } from 'redux';
import {  ADD_TODO, 
  TOGGLE_TODO, 
  SET_VISIBILITY_FILTER, 
  VisibilityFilters 
} from '../actions';

const { SHOW_ALL } = VisibilityFilters;

// const initialState = {
//   visibilityFilter: VisibilityFilters.SHOW_ALL,
//   todos: [
//     {
//       text: 'Consider using Redux',
//       completed: true
//     },
//     {
//       text: 'Keep all state in a single tree',
//       completed: false
//     }
//   ]
// }

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO: 
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
      }
      return todo
    })
    default:
      return state
  }
}

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type){
    case SET_VISIBILITY_FILTER:
      return action.filter
  default:
    return state
  }
}

// const todoApp = (state = {}, action) => {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// } down below is the equivalent to this using redux's combine reducer 

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;