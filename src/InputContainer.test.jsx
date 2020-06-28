import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import { updateTaskTitle, addTask } from './action/action-creators';

import InputContainer from './InputContainer';

jest.mock('./__mocks__/react-redux');

function renderComponent() {
  return render(<InputContainer />);
}

describe('<InputContainer />', () => {
  it('input task', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      taskTitle: '',
    }));

    const { getByRole } = renderComponent();

    const newTaskTitle = 'some task';
    const taskInput = getByRole('textbox');
    fireEvent.change(taskInput, { target: { value: newTaskTitle } });
    expect(dispatch).toBeCalledWith(updateTaskTitle(newTaskTitle));
  });

  it('add task', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      taskId: 0,
      taskTitle: 'some task',
      tasks: [],
    }));

    const { getByRole } = renderComponent();

    const addTaskButton = getByRole('button', { name: '추가' });
    fireEvent.click(addTaskButton);
    expect(dispatch).toBeCalledTimes(1);
    expect(dispatch).toBeCalledWith(addTask());
  });
});
