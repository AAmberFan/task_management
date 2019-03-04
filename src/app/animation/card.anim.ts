import { trigger, state, transition, style, animate, keyframes} from '@angular/animations';

export const cardAmin = trigger('card',[
  state('out', style({transform: 'scale(1)', 'box-shadow': 'none'})),
  state('hover', style({transform: 'scale(1.1)', 'box-shadow': '1px 1px 2px 2px rgba(0,0,0,0.1)'})),
  transition('out => hover', animate('100ms ease-in')),
  transition('hover => out', animate('100ms ease-out')),
])
