import { Component, inject } from '@angular/core';
import { MainContainerComponent } from '../layout';
import { TodoService } from 'src/app/services/todo/todo.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone:true,
  imports: [MainContainerComponent]
})
export class HomeComponent {

  todoService=inject(TodoService)
  get todos(){
    return this.todoService.todos;
  
  }
  


}
