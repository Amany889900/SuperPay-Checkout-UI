import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.css'
})
export class CustomComponent {
  constructor(private httpClient: HttpClient){}

  @Input() header: string='';
  @Input() content: string='';
  @Input() icon: any='';
  @Input() isExpanded: boolean = false; 
  @Output() toggleEvent = new EventEmitter<void>();




  togglePanel() {
    this.toggleEvent.emit(); 
    
  }

 
}
