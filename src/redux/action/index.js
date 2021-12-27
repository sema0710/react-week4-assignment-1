export const CHANGE_TITLE = 'CHANGE_TITLE';

export const ADD_TODO = 'ADD_TODO';

export const DELETE_TODO = 'DELETE_TODO';

export const changeTitle = (title) => ({ type: CHANGE_TITLE, value: title });

export const addTodo = (todo) => ({ type: ADD_TODO, value: todo });

export const deleteTodo = (targetId) => ({ type: DELETE_TODO, value: targetId });
