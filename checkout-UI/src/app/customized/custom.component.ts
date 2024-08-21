import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.css'
})
export class CustomComponent {
  @Input() header: string='';
  @Input() content: string='';

  isExpanded = false;

  togglePanel() {
    this.isExpanded = !this.isExpanded;
  }



}
