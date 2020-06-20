import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todos.reducer';

export interface AppState {
  todos: Todo[]
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer
}