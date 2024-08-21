import { Component } from '@angular/core';
import { CustomComponent } from '../../customized/custom.component';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  
panels:CustomComponent[]; 


constructor(){
  this.panels=[
    { header: 'Panel 1', content: 'This is the content of panel 1.'},
    { header: 'Panel 2', content: 'This is the content of panel 2.'},
    { header: 'Panel 3', content: 'This is the content of panel 3.'}
  ];
}

}
