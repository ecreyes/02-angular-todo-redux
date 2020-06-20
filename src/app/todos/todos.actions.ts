import { createAction,props } from '@ngrx/store';

export const add_todo = createAction('[todos] Add',props<{titulo:String}>());
export const complete_todo = createAction('[todos] complete',props<{id:String}>());
export const delete_todo = createAction('[todos] delete',props<{id:String}>());
export const update_todo = createAction('[todos] update',props<{id:String,titulo:String,estado:boolean}>());