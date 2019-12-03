export interface Todo {
  id: string;
  task: string;
  complete: boolean;
};

export type AddTodo = (task: string) => void;

export type ToggleTodo = (id: string) => void;

export type RemoveTodo = (id: string) => void;
