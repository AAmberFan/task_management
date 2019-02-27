import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskRoutingModule } from './task-routing.module';
import { MatButtonModule, MatIconModule, MatMenuModule ,MatListModule, MatCheckboxModule, MatRadioModule} from '@angular/material';
import { NewTaskComponent } from './new-task/new-task.component';
import { SharedModule } from '../shared/shared.module';
import { CopyTaskComponent } from './copy-task/copy-task.component';

@NgModule({
  declarations: [
    TaskHomeComponent,
    TaskItemComponent,
    TaskHeaderComponent,
    TaskListComponent,
    NewTaskComponent,
    CopyTaskComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule
   ],
   entryComponents:[
     NewTaskComponent,
     CopyTaskComponent
   ],
  exports: [],
  providers: [],
})
export class TaskModule {}
