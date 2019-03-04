import { CopyTaskComponent } from './../copy-task/copy-task.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { NewTaskComponent } from '../new-task/new-task.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
})
export class TaskHomeComponent implements OnInit {
  lists = [
    {
      id: 1,
      name: 'Proposed',
      tasks: [
        {
          id: 1,
          desc: 'task 1 do yourself',
          completed: true,
          priority: 3,
          owner: {
            id: 1,
            name: 'Amber',
            avatar: 'item3',
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: 'task 2 do not do yourself',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: 'Bob',
            avatar: 'item3',
          },
          dueDate: new Date(),
        },
      ],
    },
    {
      id: 2,
      name: 'Active',
      tasks: [
        {
          id: 1,
          desc: 'task 3 on diet',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: 'Amber',
            avatar: 'item1',
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: 'task 4 exercise',
          completed: false,
          priority: 2,
          dueDate: new Date(),
          reminder: new Date()
        },
      ],
    },
  ];
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent, {data: {title: 'New task'}});
  }

  launchCopyTasks() {
    const dislogRef = this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}});
  }

  launchUpdateTaskDialog(task) {
    const dialogRef = this.dialog.open(NewTaskComponent,
      {data: {title:'Modify the task', task: task}});
  }

  launchConfirmDialog(){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { title: 'Delete the task', content: 'Confirm to delete the task' },
    });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchEditListDialog(){
    const dialogRef = this.dialog.open(NewTaskListComponent, {
      data: { title: 'Edit List Name'},
    });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchNewTaskListDialog(){
    const dialogRef = this.dialog.open(NewTaskListComponent, {
      data: { title: 'Add New List'},
    });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
}
