import { uuid } from 'uuidv4';

export class Todo{
  public id:String;
  public titulo:String;
  public estado:boolean;

  constructor(titulo:String){
    this.id = uuid();
    this.titulo = titulo;
    this.estado = false;
  }
}