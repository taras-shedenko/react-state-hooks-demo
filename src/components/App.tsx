import '../../styles/app.css';

import React, { useReducer } from 'react';

import { AddTodo, ToggleTodo, RemoveTodo } from '../data-model/Todo';
import { todoListReducer } from '../data-model/todoListReducer';

import { AddTodoContext, ToggleTodoContext, RemoveTodoContext } from './TodoContext';

import TodoList from './TodoList';
import TodoEditor from './TodoEditor';

const App = () => {
  const [todoList, dispatchTodo] = useReducer(todoListReducer, []);

  const addTodo: AddTodo =
    task => dispatchTodo({
      type: 'ADD_TODO',
      task: task,
    });

  const toggleTodo: ToggleTodo =
    id => dispatchTodo({
      type: 'TOGGLE_TODO',
      id: id,
    });

  const removeTodo: RemoveTodo =
    id => dispatchTodo({
      type: 'REMOVE_TODO',
      id: id,
    });

  return (
    <div className='app'>
      <ToggleTodoContext.Provider value={toggleTodo}>
        <RemoveTodoContext.Provider value={removeTodo}>
          <TodoList todoList={todoList} />
        </RemoveTodoContext.Provider>
      </ToggleTodoContext.Provider>
      <AddTodoContext.Provider value={addTodo}>
        <TodoEditor />
      </AddTodoContext.Provider>
    </div>
  );
};

export default App;
