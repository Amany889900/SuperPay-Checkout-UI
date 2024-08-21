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

  constructor(){
    this.items=[{title:'header1',content:'content1'},
      {title:'header2',content:'content2'},
      {title:'header3',content:'content3'}
    ]
}

}
