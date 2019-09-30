import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  lists:List[];
  lastName:string;

  constructor(  ) {
    this.getList();
  }

  createList(title: string){
    const newList = new List(title);
    this.lists.push(newList);
    this.saveList();
    return newList.id;
  }

  deleteList( list:List){
    for(let i = 0 ; i < this.lists.length ; i++){
      if(this.lists[i].id === list.id){
        this.lists.splice(i, 1);
      }
    }
    this.saveList();
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
