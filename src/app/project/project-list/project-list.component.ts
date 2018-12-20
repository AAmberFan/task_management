import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      'name': 'project1',
      'desc': 'this is the first project',
      'coverImg': 'assets/img/cover/0.jpg'
    },
    {
      'name': 'project2',
      'desc': 'this is the second project',
      'coverImg': 'assets/img/cover/1.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
