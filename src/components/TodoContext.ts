import { createContext } from 'react';

import { AddTodo, ToggleTodo, RemoveTodo } from '../data-model/Todo';

export const AddTodoContext = createContext<AddTodo>(() => {});

export const ToggleTodoContext = createContext<ToggleTodo>(() => {});

export const RemoveTodoContext = createContext<RemoveTodo>(() => {});
