import { useDispatch, useSelector } from 'react-redux';

import Page from './Page';
import { addTodo, changeTitle, deleteTodo } from './redux/action';

export default function App() {
  const dispatch = useDispatch();
  const { newId, taskTitle, tasks } = useSelector((store) => store.rootReducer);
  function handleChangeTitle(event) {
    dispatch(changeTitle(event.target.value));
  }

  function handleClickAddTask() {
    dispatch(addTodo({ id: newId, title: taskTitle }));
  }

  function handleClickDeleteTask(id) {
    dispatch(deleteTodo(id));
  }

  return (
    <Page
      taskTitle={taskTitle}
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
      tasks={tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
