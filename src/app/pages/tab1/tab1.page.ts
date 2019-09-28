import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  name:string;

  constructor(  public todoService: TodoService,
                private router: Router,
                private alertCtrl: AlertController ) {

  }

  async addList(){

    const alert =  await this.alertCtrl.create({
      header: 'Alert',
      inputs: [{
        name: "titulo",
        type: "text",
        placeholder: "Nombre de la lista"
      }],
      buttons: [{
        text: "Agregar",
        handler: (data) => {
          // console.log("Crear");
          let listId;
          if(data.titulo.length !== 0){
            listId = this.todoService.createList(data.titulo);
            this.router.navigateByUrl( `/tabs/tab1/add/${ listId }`);
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

  
  selectedList( list:List ){
    this.router.navigateByUrl( `/tabs/tab1/add/${ list.id }`);
  }

}
