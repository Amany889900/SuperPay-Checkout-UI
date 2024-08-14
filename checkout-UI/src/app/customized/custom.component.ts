import { Component } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.css'
})
export class CustomComponent {
  isExpanded = false;

  togglePanel() {
    this.isExpanded = !this.isExpanded;
  }
}
