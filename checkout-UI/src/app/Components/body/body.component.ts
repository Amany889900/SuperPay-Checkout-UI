import { Component } from '@angular/core';
import { CustomComponent } from '../customized/custom.component';
import { item } from '../../Models/item';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  items:item[];

  expandedIndex: number | null = null; 

  constructor(private http: HttpClient){
    this.items=[{title:'Pay With Credit/Debit Card',content:'content 1',icon:"bi bi-credit-card"},
      {title:'Buy Now Pay Later',content:'content 2',icon:"bi bi-bank"},
      {title:'Bank Installment',content:'content 3',icon:"bi bi-card-text"}
    ]
}

onToggle(index: number) {
  this.expandedIndex = this.expandedIndex === index ? null : index; // Toggle the expanded item

  if (index === 0) { // Check if the first dropdown is clicked
    this.updatePaymentStatus();
  }
}

updatePaymentStatus() {
  const paymentId = '66d06f15b8aca726cc8cc7ba'; 
  this.http.put(`http://localhost:3000/payments/${paymentId}`, { paymentStatus: 'pending' })
    .subscribe(response => {
      console.log('Payment status updated:', response);
    }, error => {
      console.error('Error updating payment status:', error);
    });
}

}
