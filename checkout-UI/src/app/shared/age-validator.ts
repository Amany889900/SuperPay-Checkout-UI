import { AbstractControl} from '@angular/forms';

export function ageValid(control: AbstractControl): {[key:string]:boolean} | null {

  let age= parseInt(control.value);

  if(age<16) return {underAge:true};
  else return null;
    
  }