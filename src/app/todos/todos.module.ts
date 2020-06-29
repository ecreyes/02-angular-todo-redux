import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

//components
import { TodoIndexComponent } from './todo-index/todo-index.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoInfoComponent } from './todo-info/todo-info.component';
import { TodoFilterComponent } from './todo-filter/todo-filter.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FiltrarPipe } from './filtrar.pipe';

@NgModule({
  declarations: [TodoIndexComponent, TodoAddComponent, TodoInfoComponent, TodoFilterComponent, TodoListComponent, FiltrarPipe],
  exports:[TodoIndexComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TodosModule { }
