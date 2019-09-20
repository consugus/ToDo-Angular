import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  lists:List[];
  lastName:string;

  constructor(  ) {
    // const list1 = new List("Recolectar piedras del infinito");
    // const list2 = new List("Heroes a desaparecer");
    // this.lists.push(list1, list2);

    this.getList();
    // console.log(this.lists);
  }

  createList(title: string){
    const newList = new List(title);
    this.lists.push(newList);
    this.saveList();
    return newList.id;
  }

  saveList(){
    localStorage.setItem("data", JSON.stringify(this.lists) );
  }

  getList(){
    this.lists = ( localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [] )
  }

  getListByID(id: string | number){;
    id = Number(id);

    for(let i = 0 ; this.lists.length ; i++){
      if(this.lists[i].id === id){
        return this.lists[i];
      }
    }
  }

}
