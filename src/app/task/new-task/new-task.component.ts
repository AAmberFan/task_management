import { MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  title = '';
  priorities = [
    {
      label:'Priority Level 1',
      value: 1
    },
    {
      label:'Priority Level 2',
      value: 2
    },
    {
      label:'Priority Level 3',
      value: 3
    },
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) private data
  ) { }

  ngOnInit() {
    this.title = this.data.title;
    console.log(JSON.stringify(this.data.task));
  }

}
