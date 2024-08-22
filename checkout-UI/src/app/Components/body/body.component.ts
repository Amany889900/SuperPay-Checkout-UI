import { Component } from '@angular/core';
import { CustomComponent } from '../../customized/custom.component';
import { item } from '../../Models/item';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  items:item[];

  expandedIndex: number | null = null; // This property tracks the currently expanded item

  constructor(){
    this.items=[{title:'Pay With Credit/Debit Card',content:'content 1',icon:"bi bi-credit-card",id:1},
      {title:'Buy Now Pay Later',content:'content 2',icon:"bi bi-bank",id:2},
      {title:'Bank Installment',content:'content 3',icon:"bi bi-card-text",id:3}
    ]
}

onToggle(index: number) {
  this.expandedIndex = this.expandedIndex === index ? null : index; // Toggle the expanded item
}


}
