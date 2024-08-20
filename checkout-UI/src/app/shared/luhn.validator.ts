import { AbstractControl, ValidationErrors } from '@angular/forms';

export function luhnValidator(control: AbstractControl): {{}} | null {
  const value = control.value.replace(/\s+/g, ''); // Remove spaces
 

  let sum = 0;
  let shouldDouble = false;

  for (let i = value.length - 1; i >= 0; i--) {
    let digit = parseInt(value.charAt(i), 10);

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
