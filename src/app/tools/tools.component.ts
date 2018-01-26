import { Component, OnInit } from '@angular/core';
import { ToolService } from '../services/tool-crud/tool.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css'],
  providers : [ToolService]
})
export class ToolsComponent implements OnInit {
  addend: boolean;
  constructor(private ToolService: ToolService) { }

  ngOnInit() {
  }

}
