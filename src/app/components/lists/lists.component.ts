import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { List } from 'src/app/models/list.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @Input() terminados = true;

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

}
