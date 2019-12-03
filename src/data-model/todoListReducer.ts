import { Reducer } from 'react';
import uuid from 'uuid/v4';

import { Todo } from './Todo';

export type TodoAction = {
  type: 'ADD_TODO';
  task: string;
} | {
  type: 'TOGGLE_TODO',
  id: string;
} | {
  type: 'REMOVE_TODO',
  id: string;
};

export const todoListReducer: Reducer<Todo[], TodoAction> = (state, action) => {
  let newState: Todo[];

  switch(action.type) {
    case 'ADD_TODO':
      newState = [...state, {
        id: uuid(),
        task: action.task,
        complete: false,
      }];
      break;

    case 'TOGGLE_TODO':
      newState = state.map(
        todo => todo.id == action.id ? {...todo, complete: !todo.complete } : todo
      );
      break;

    case 'REMOVE_TODO':
      newState = state.filter(
        todo => todo.id != action.id
      );
      break;

    default:
      newState = state;
  }

  return newState;
};
