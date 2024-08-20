import { AbstractControl} from '@angular/forms';

export function luhnValidator(control: AbstractControl):{[key:string]:boolean} | null {
 
  let sum = 0;
  let shouldDouble = false;

  for (let i = control.value.length - 1; i >= 0; i--) {
    let digit = parseInt(control.value.charAt(i), 10);

    if (isNaN(digit)) {
        continue;
      }

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return (sum % 10 === 0) ? null : { luhn: true };
}
