import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.css'
})
export class CustomComponent {
  @Input() header: string='';
  @Input() content: string='';
  @Input() icon: any='';
  @Input() isExpanded: boolean = false; 
  @Output() toggleEvent = new EventEmitter<void>();

  togglePanel() {
    this.toggleEvent.emit(); 
  }
}
