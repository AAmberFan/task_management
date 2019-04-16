import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';
import { findSafariExecutable } from 'selenium-webdriver/safari';
import { DragDropService } from '../drag-drop.service';

@Directive({
  selector: '[app-draggable][dragTag][dragData][draggedClass]'
})
export class DragDirective {
  @Input() draggedClass: string;
  @Input() dragTag: string;
  @Input() dragData: any;

  private _isDraggable = false;

  @Input('app-draggable')
  set isDraggable(val: boolean){
    this._isDraggable = val;
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${val}`);
  }

  get isDraggable() {
    return this._isDraggable;
  }

  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private service: DragDropService
    ) { }

  @HostListener('dragstart',['$event'])
  onDragStart(ev: Event){
    if (this.el.nativeElement === ev.target){
      this.rd.addClass(this.el.nativeElement, this.draggedClass);
      this.service.setDragData({tag: this.dragTag, data: this.dragData});
    }
  }

  @HostListener('dragend',['$event'])
  onDragEnd(ev: Event){
    if (this.el.nativeElement === ev.target){
      this.rd.removeClass(this.el.nativeElement, this.draggedClass);
    }
  }
}
