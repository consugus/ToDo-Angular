import { Injectable, ViewChild } from '@angular/core';
import { AlertController, IonList } from '@ionic/angular'
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  lists:List[];
  lastName:string;

  constructor( private alertCtrl:AlertController ) {
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

  async editList(list:List){
    console.log(`Hay que editar la lista ${list.title}, desde los servicios`);

    const alert =  await this.alertCtrl.create({
      header: 'Editar Lista',
      inputs: [{
        name: "titulo",
        type: "text",
        value: list.title,
        placeholder: "Nombre de la lista"
      }],
      buttons: [{
        text: "Guardar",
        handler: (data) => {
          if(data.titulo){
            list.title = data.titulo;
            this.saveList();
          }
        }
      },
      {
        text: "Cancelar",
        role: "cancel",
        handler: () => {
          // console.log("Cancelar");
        }
      }]
    });
    await alert.present();

  }

}
