import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
  animations: [
    trigger('expansionAnimation', [
      state('false', style({ height: '0', overflow: 'hidden' })),
      state('true', style({ height: '*', overflow: 'hidden' })),
      transition('false <=> true', animate('300ms ease-in-out')),
    ]),
    trigger('rotateAnimation', [
      state('false', style({ transform: 'rotate(45deg)' })),
      state('true', style({ transform: 'rotate(-135deg)' })),
      transition('false <=> true', animate('300ms ease-in-out')),
    ]),
  ],
})
export class ExpansionPanelComponent {
  @Input() expanded = false;

  toggle() {
    this.expanded = !this.expanded;
  }
}
