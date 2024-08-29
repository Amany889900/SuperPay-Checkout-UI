import { Component } from '@angular/core';
import { CustomComponent } from '../customized/custom.component';
import { item } from '../../Models/item';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  items:item[];

  expandedIndex: number | null = null; 

  constructor(){
    this.items=[{title:'Pay With Credit/Debit Card',content:'content 1',icon:"bi bi-credit-card"},
      {title:'Buy Now Pay Later',content:'content 2',icon:"bi bi-bank"},
      {title:'Bank Installment',content:'content 3',icon:"bi bi-card-text"}
    ]
}

onToggle(index: number) {
  this.expandedIndex = this.expandedIndex === index ? null : index; // Toggle the expanded item
}


}
