import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from "./models/todo.model";
import { filtrosValidos } from "../filtro/filtro.actions";

@Pipe({
  name: 'filtrarPipe'
})
export class FiltrarPipe implements PipeTransform {

  transform(todos:Todo[], filtro: filtrosValidos): Todo[] {
    switch(filtro){
      case 'completados':
        return todos.filter(todo=>todo.estado);
      case 'pendientes':
        return todos.filter(todo=>!todo.estado);
      default:
        return todos;
    }
  }

}
