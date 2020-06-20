import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import {ViewChild, ElementRef} from '@angular/core';
//form
import { FormGroup, FormControl, Validators } from "@angular/forms";
//redux
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from "../todos.actions";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: ElementRef;
  form:FormGroup;
  todo:Todo = {id:"",titulo:"",estado:false};
  todos:Todo[] = [];

  constructor(private store:Store<AppState>) { 
    this.form = new FormGroup({
      titulo: new FormControl("", Validators.required),
      estado: new FormControl(false,Validators.required)
    });
  }

  ngOnInit(): void {
    //this.store.select("todos").subscribe(todos=>this.todos=todos);
    this.store.subscribe(({todos})=>this.todos=todos);
  }

  seleccionar(todo){
    this.todo = todo;
    this.form.setValue({titulo:this.todo.titulo,estado:this.todo.estado});
  }

  completar(id){
    this.store.dispatch(actions.complete_todo({id}))
  }

  eliminar(id){
    this.store.dispatch(actions.delete_todo({id}));
  }

  onSubmit(){
    if(this.form.valid){
      this.store.dispatch(actions.update_todo({...this.form.value,id:this.todo.id}));
      this.closeBtn.nativeElement.click();
    }
  }
}
