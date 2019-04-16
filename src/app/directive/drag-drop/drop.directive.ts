import { Directive, ElementRef, Renderer2, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { DragDropService, DragData } from '../drag-drop.service';
import { take } from 'rxjs/operators';

@Directive({
  selector: '[app-droppable][dropTags][dragEnterClass]'
})
export class DropDirective {

  @Output() dropped = new EventEmitter<DragData>();
  @Input() dragEnterClass: string;
  @Input() dropTags: string[] = [];
  private data$;

  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private service: DragDropService
    ) {
      this.data$ = this.service.getDragData().pipe(take(1));
     }

  @HostListener('dragenter', ['$event'])
  onDragEnter(ev: Event){
    ev.preventDefault();
    ev.stopPropagation();
    if(this.el.nativeElement === ev.target){
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1){
          this.rd.addClass(this.el.nativeElement, this.dragEnterClass);
        }
      });
    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(ev: Event){
    if(this.el.nativeElement === ev.target){
    //  this.rd.addClass(this.el.nativeElement, this.dragEnterClass);
    this.data$.subscribe(dragDate => {
      if (this.dropTags.indexOf(dragDate.tag) > -1) {
        this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'all');
        this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'move');
      }else{
        this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'none');
        this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'none');
      }
    })
    }
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(ev: Event){
    if(this.el.nativeElement === ev.target){
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1){
          this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
          this.dropped.emit(dragData);
          this.service.clearDragData();
        }
      });

    }
  }

  @HostListener('drop', ['$event'])
  onDragDrop(ev: Event){
    ev.preventDefault();
    ev.stopPropagation();
    if(this.el.nativeElement === ev.target){
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1){
          this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
          this.dropped.emit(dragData);
          this.service.clearDragData();
        }
      });
    }
  }
}
