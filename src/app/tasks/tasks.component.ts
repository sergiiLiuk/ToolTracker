import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../services/task-crud/task.service';
import { Task } from '../model/task.model';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() tasks;
  lat: number;
  lng: number;

  zoom: number;
  taskList: Task[];
  markerList: Task[] = [];
  showAll: boolean;
  constructor( private taskService: TaskService) { }  

  ngOnInit() { 
    var x = this.taskService.getData();
    x.snapshotChanges().subscribe(item =>{
      this.taskList = [];
      item.forEach(element =>{
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.taskList.push(y as Task);        
      });    
    }); 
    this.zoom= 13;
    this.getUserLocation(); 
  }
 
  onChoseLocation(event){
    this.lat = event.coords.lat;
    this.lng = event.coords.lng; 
   }

  private getUserLocation(){ 
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position=>{
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;     
      });
    }     
  }  

  onTaskClick(task:Task){
    this.markerList = [];
   this.markerList.push({
    $key: task.$key,  
    tool: task.tool,
    in_use_by: task.in_use_by,
    task: task.task,
    lat: task.lat,
    lng: task.lng    
  });
  } 
    
  getAllTasks(valid: boolean){
    this.showAll=valid;
  }
}
 