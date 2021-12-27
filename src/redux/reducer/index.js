import { combineReducers } from 'redux';

import { CHANGE_TITLE, ADD_TODO, DELETE_TODO } from '../action';

const initState = {
  tasks: [],
  taskTitle: '',
  newId: 100,
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
  case CHANGE_TITLE:
    return {
      ...state,
      taskTitle: action.value,
    };
  case ADD_TODO:
    return {
      ...state,
      tasks: [...state.tasks, action.value],
      newId: state.newId + 1,
      taskTitle: '',
    };
  case DELETE_TODO:
    return {
      ...state,
      tasks: state.tasks.filter((task) => task.id !== action.value),
    };
  default:
    return state;
  }
};

export default combineReducers({ rootReducer });
