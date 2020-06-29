import { Component, OnInit } from '@angular/core';

//redux
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from "../../filtro/filtro.actions";
import { filtrosValidos } from "../../filtro/filtro.actions";

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.css']
})
export class TodoFilterComponent implements OnInit {
  filters: filtrosValidos[] = ["todos", "pendientes", "completados"];
  select: filtrosValidos = this.filters[0];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  seleccionar(option: filtrosValidos) {
    this.select = option;
    this.store.dispatch(actions.setFiltro({ filtro: option }));
  }

}
