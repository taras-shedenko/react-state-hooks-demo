import React, { FunctionComponent } from 'react';

import { Todo } from '../data-model/Todo';
import TodoItem from './TodoItem';

interface TodoListProps {
  todoList: Todo[],
};

const TodoList: FunctionComponent<TodoListProps> = ({ todoList }) =>
  <div className='todo-list'>
    <ul>
      {todoList.map(todo =>
        <TodoItem key={todo.id} todo={todo}/>
      )}
    </ul>
  </div>

export default TodoList;
