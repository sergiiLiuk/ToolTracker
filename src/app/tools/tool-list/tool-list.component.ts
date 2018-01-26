import { Component, OnInit, Input } from '@angular/core';
import { Tool } from '../../model/tool.model';
import { ToolService } from '../../services/tool-crud/tool.service';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent implements OnInit {
  @Input() tools;
  toolList: Tool[];
  constructor(private toolService: ToolService) { }

  ngOnInit() {
    var x = this.toolService.getData();
    x.snapshotChanges().subscribe(item =>{
      this.toolList = [];
      item.forEach(element =>{
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.toolList.push(y as Tool);        
      });      
    });  
  }

}
