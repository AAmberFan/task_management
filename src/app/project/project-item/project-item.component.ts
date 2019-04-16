import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener, ChangeDetectionStrategy
} from '@angular/core';
import { cardAmin } from 'src/app/animation/card.anim';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations:[
    cardAmin
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectItemComponent implements OnInit {

  @Input() item;
  @Output() onInvite = new EventEmitter<void>();
  @Output() onEdit = new EventEmitter<void>();
  @Output() onDel = new EventEmitter<void>();
  @HostBinding('@card') cardState = 'out';

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.cardState = 'hover';
  }
  @HostListener('mouseleave')
  onmouseleave(){
    this.cardState = 'out';
  }
  onInviteClick(){
    this.onInvite.emit();
  }

  onEditClick(){
    this.onEdit.emit();
  }

   onDelClick(){
    this.onDel.emit();
  }

}
