import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  lists:List[] = [];
  lastName:string;

  constructor(  ) {
    // console.log("Servicio de Tareas inicializado");

    const list1 = new List("Recolectar piedras del infinito");
    const list2 = new List("Heroes a desaparecer");

    this.lists.push(list1, list2);
    console.log(this.lists);
  }

  createList(title: string){
    const newList = new List(title);
    this.lists.push(newList);
  }
}
