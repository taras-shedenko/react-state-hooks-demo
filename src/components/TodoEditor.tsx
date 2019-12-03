import React, { FunctionComponent, useState, useContext, ChangeEventHandler, FormEventHandler } from 'react';

import { AddTodoContext } from './TodoContext';

const TodoEditor: FunctionComponent = () => {
  const [task, setTask] = useState('');

  const addTodo = useContext(AddTodoContext);

  const handleEditTask: ChangeEventHandler<HTMLInputElement> = event =>
    setTask(event.target.value);

  const handleAddTask: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    addTodo(task);
    setTask('');
  };

  return (
    <div className='task'>
      <form onSubmit={handleAddTask}>
        <input type='text' value={task} onChange={handleEditTask}/>
        <button type='submit' disabled={task.length==0}>Add</button>
      </form>
    </div>
  );
}

export default TodoEditor;
