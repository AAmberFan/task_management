import { DragDirective } from './drag-drop/drag.directive';
import { NgModule } from '@angular/core';
import { DropDirective } from './drag-drop/drop.directive';
import { DragDropService } from './drag-drop.service';

@NgModule({
  declarations: [
    DropDirective,
    DragDirective
  ],
  imports: [

  ],
  exports:[
    DropDirective,
    DragDirective
  ],
  providers:[
    DragDropService
  ]
})
export class DirectiveModule { }
