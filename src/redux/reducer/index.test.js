import { changeTitle, addTodo } from '../action';
import rootReducer from './index';

describe('rootReducer', () => {
  const initState = {
    tasks: [],
    taskTitle: '',
    newId: 100,
  };

  it('타이틀 변경 액션을 실행한다.', () => {
    const state = rootReducer(initState, changeTitle('변경된 타이틀'));

    expect(state.rootReducer.taskTitle).toBe('변경된 타이틀');
  });

  it('할 일 추가 액션을 실행한다.', () => {
    const state = rootReducer(initState, addTodo({ id: 101, title: '새로운 할 일' }));

    expect(state.rootReducer.tasks).toHaveLength(1);
    expect(state.rootReducer.tasks[0]).toEqual({
      id: 101,
      title: '새로운 할 일',
    });
  });
});
