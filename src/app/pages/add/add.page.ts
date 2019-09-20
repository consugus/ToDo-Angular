import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { List } from '../../models/list.model';
import { ListItem } from '../../models/list.item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list:List;
  taskName: string = "";

  constructor( private todoService: TodoService,
               private route:ActivatedRoute ) {
    const listId = this.route.snapshot.paramMap.get("listId");

    this.list = todoService.getListByID(listId);

    // console.log( this.list );
  }

  ngOnInit() {
  }

  agregarTarea(){
    if( this.taskName.length === 0){
      return;
    }
    const newTask:ListItem = new ListItem( this.taskName );
    this.list.item.push(newTask);
    this.taskName = "";
    this.todoService.saveList();
  }

  stateChange(task:ListItem){

    const all = this.list.item.length;

    let pending:number = 0;
    for(let i = 0 ; i < all ; i++){
      if( !this.list.item[i].state){ pending++ }
    }

    if( !pending ){
      console.log("Se completaron todas las tareas");
      this.list.endDate = new Date();
      this.list.completed = true;
    } else {
      this.list.endDate = undefined;
      this.list.completed = false;
    };

    this.todoService.saveList();
  }




}
