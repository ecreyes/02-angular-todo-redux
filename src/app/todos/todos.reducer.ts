import { createReducer, on } from '@ngrx/store';
import {add_todo,complete_todo,delete_todo,update_todo} from "./todos.actions";
import { Todo } from './models/todo.model';

export const initialState:Todo[] = [];

const _todoReducer = createReducer(initialState,
  on(add_todo, (state,{titulo}) => [...state,new Todo(titulo)]),
  on(complete_todo,(state,{id})=>state.map(todo=>{
    if(todo.id===id){
      return {...todo,estado:true};
    }
    return todo;
  })),
  on(delete_todo,(state,{id})=>state.filter(todo=>todo.id!==id)),
  on(update_todo,(state,mytodo)=>state.map(todo=>{
    if(todo.id==mytodo.id){
      return {id:mytodo.id,titulo:mytodo.titulo,estado:mytodo.estado};
    }
    return todo;
  }))
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}