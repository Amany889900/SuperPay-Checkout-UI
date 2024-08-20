import { AbstractControl} from '@angular/forms';
export function expired(control: AbstractControl): {[key:string]:boolean} | null {
    
    const [month, year] = control.value.split('/').map(Number);
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // getMonth() returns 0-11
    const currentYear = currentDate.getFullYear() % 100;
  
    return ((month < 1 || month > 12 || year < currentYear || (year === currentYear && month < currentMonth)) && month && year)?
      {isExp:true}: null
    
   
  }