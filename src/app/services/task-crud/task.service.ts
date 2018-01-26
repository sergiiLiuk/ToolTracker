import { Injectable } from '@angular/core';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { AngularFireDatabase } from 'angularfire2/database';
import { Task } from '../../model/task.model';

@Injectable()
export class TaskService {
  taskList : AngularFireList<any>;
  
  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.taskList = this.firebase.list('tasks');
    return this.taskList;
  }

}
