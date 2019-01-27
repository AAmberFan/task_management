import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';

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
    },
    {
      'name': 'project3',
      'desc': 'this is the third project',
      'coverImg': 'assets/img/cover/2.jpg'
    }
  ];
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewProjectDialog(){
    const dialogRef = this.dialog.open(NewProjectComponent,  {data: {dark: true}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
}
