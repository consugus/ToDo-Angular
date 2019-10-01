import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { List } from 'src/app/models/list.model';
import { Router } from '@angular/router';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @Input() terminados = true;
  @ViewChild( IonList, {static: true} ) list: IonList;

  constructor( public todoService: TodoService,
               private router:Router
) { }

  ngOnInit() {}

  selectedList( list:List ){
    let tab:string = ( this.terminados ? "tab2" : "tab1" )
    this.router.navigateByUrl( `/tabs/${tab}/add/${ list.id }`);
  }

  deleteList( list: List ){
    this.todoService.deleteList(list);
  }

  editList(list:List){
    this.todoService.editList(list).then
    this.list.closeSlidingItems();
  }

}
