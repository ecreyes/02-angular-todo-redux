import { Component, OnInit } from '@angular/core';
//redux
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-todo-info',
  templateUrl: './todo-info.component.html',
  styleUrls: ['./todo-info.component.css']
})
export class TodoInfoComponent implements OnInit {
  restantes:number = 0;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe((state)=>{
      this.restantes = state.todos.filter(todo=>!todo.estado).length;
    })
  }

}
