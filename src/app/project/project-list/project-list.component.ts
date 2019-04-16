import { ConfirmDialogComponent } from './../../shared/confirm-dialog/confirm-dialog.component';
import { InviteComponent } from './../invite/invite.component';
import { Component, OnInit, HostBinding, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { slideToRight } from 'src/app/animation/router.admin';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      name: 'project1',
      desc: 'this is the first project',
      coverImg: 'assets/img/cover/0.jpg',
    },
    {
      name: 'project2',
      desc: 'this is the second project',
      coverImg: 'assets/img/cover/1.jpg',
    },
    {
      name: 'project3',
      desc: 'this is the third project',
      coverImg: 'assets/img/cover/2.jpg',
    },
  ];
  constructor(private dialog: MatDialog, private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, { data: { title: 'Add A New Project' } });
    dialogRef.afterClosed().subscribe(result => console.log(result));
    this.cd.markForCheck();
  }

  lauchInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent);
  }

  launchUpdateDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, { data: { title: 'Edit the Project' } });
  }

  launchConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { title: 'Delete the project', content: 'Confirm to delete the project?' },
    });
    dialogRef.afterClosed().subscribe(result => console.log(result));
    this.cd.markForCheck();
  }
}
