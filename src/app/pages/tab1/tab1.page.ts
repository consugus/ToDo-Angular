import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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
          // this.router.navigateByUrl("tabs/tab1/add");
          console.log("Crear");

          if(data.titulo.length !== 0){
            this.todoService.createList(data.titulo);
          }
          return;

        }
      },
      {
        text: "Cancelar",
        role: "cancel",
        handler: () => {
          console.log("Cancelar");
        }
      }]
    });
    await alert.present();
  }

}
