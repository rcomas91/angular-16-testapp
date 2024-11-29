import { CommonModule, NgForOf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
  standalone:true,
  imports:[FormsModule,MatListModule,MatFormFieldModule,NgForOf, MatInputModule,CommonModule,MatButtonModule, MatDividerModule, MatIconModule]
})
export class DescriptionComponent {
 tasksList:string[]=[];
 taskNew:string = '';

 private _taskService=inject(TasksService);
 ngOnInit():void{
  this.tasksList=this._taskService.getTasks();

 }
 addTask(){
  this._taskService.addTasks(this.taskNew);
  this.taskNew= '';
  this.tasksList=this._taskService.getTasks();
 }
 deleteTask(index:number){
  setTimeout(()=>{
    this._taskService.deleteTask(index);
  this.tasksList=this._taskService.getTasks();
  },1000)
  
 }
}
