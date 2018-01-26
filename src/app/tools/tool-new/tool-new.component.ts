import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { ToolService } from '../../services/tool-crud/tool.service';

@Component({
  selector: 'app-tool-new',
  templateUrl: './tool-new.component.html',
  styleUrls: ['./tool-new.component.css']
})
export class ToolNewComponent implements OnInit {
  constructor(public toolService: ToolService ) {     
  }
 
  ngOnInit() {
    this.resetForm(); 
  }

  onSubmit(form: NgForm){
    this.toolService.createTool(form.value);
    this.resetForm(form);
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.toolService.selectedTool = {
      $key: "",
      name: "",
      description: ""
    }
  }

}
