import React, { FunctionComponent, useContext, ChangeEventHandler, MouseEventHandler } from 'react';

import { Todo } from '../data-model/Todo';
import { ToggleTodoContext, RemoveTodoContext } from './TodoContext';

interface TodoItemProps {
  todo: Todo;
};

const TodoItem: FunctionComponent<TodoItemProps> = ({ todo }) => {
  const { id, task, complete } = todo;

  const toggleTodo = useContext(ToggleTodoContext);
  const removeTodo = useContext(RemoveTodoContext);

  const toggleTodoHandler: ChangeEventHandler = () =>
    toggleTodo(id);

  const removeTodoHandler: MouseEventHandler = () =>
    removeTodo(id);

  return (
    <li>
      <label>
        <input
          type='checkbox'
          checked={complete}
          id={id}
          onChange={toggleTodoHandler}
        />
        {task}
      </label>
      <button
        id={id}
        onClick={removeTodoHandler}
      >X</button>
    </li>
  );
};

export default TodoItem;
