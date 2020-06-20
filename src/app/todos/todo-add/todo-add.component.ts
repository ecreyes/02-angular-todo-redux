import { Component, OnInit } from '@angular/core';
//form
import { FormGroup, FormControl, Validators } from "@angular/forms";
//redux
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todos.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  form: FormGroup;

  constructor(private store: Store<AppState>) {
    this.form = new FormGroup({
      titulo: new FormControl("", Validators.required)
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      //console.log(this.form);
      //console.log(this.form.value);
      this.store.dispatch(actions.add_todo({titulo:this.form.value.titulo}));
      this.form.reset({
        titulo: ""
      });
    }
  }

}
