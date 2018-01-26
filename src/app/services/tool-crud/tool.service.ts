import { Injectable } from '@angular/core';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { AngularFireDatabase } from 'angularfire2/database';
import { Tool } from '../../model/tool.model';

@Injectable()
export class ToolService {
  toolList : AngularFireList<any>;
 
  selectedTool: Tool = new Tool();
  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.toolList = this.firebase.list('tools');
    return this.toolList;
  }
 
  createTool(tool: Tool){
    this.toolList.push({
      name: tool.name,
      description: tool.description
    });
  }

  updateTool(tool: Tool){
    this.toolList.update(tool.$key,{     
      name: tool.name,
      description: tool.description
    });
  }

  deleteTool(key: string){
    this.toolList.remove(key);
  }

}
