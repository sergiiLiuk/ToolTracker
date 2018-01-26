import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Tool } from '../../model/tool.model';
import { ToolService } from '../../services/tool-crud/tool.service';

@Component({
  selector: 'app-tool-edit',
  templateUrl: './tool-edit.component.html',
  styleUrls: ['./tool-edit.component.css']
})
export class ToolEditComponent implements OnInit {
  @Input() tool;
  toolEdit: Tool= new Tool();
  constructor(private toolService: ToolService) { }

  ngOnInit() {
    Object.assign(this.toolEdit, this.tool);
  }

  onSubmit(form: NgForm){
    this.tool.editable = false;
    this.toolService.updateTool(form.value); 
  }

  onDelete(form: NgForm){
    if (confirm('Are you sure to delete this record?')==true){
      this.toolService.deleteTool(form.value.$key);
      this.resetForm(form);
    }
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.toolService.selectedTool = {
      $key: null,
      name: "",
      description: ""
    }
  }
}
