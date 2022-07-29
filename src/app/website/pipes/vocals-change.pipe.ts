import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vocalsChange',
})
export class VocalsChangePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    let lowerCase = value.toLowerCase();
    let split = lowerCase.split('');

    split.forEach((letter, index) => {
      let correspondingNumber: string | boolean = false;

      // changing vocals
      if (letter == 'a') correspondingNumber = '4';
      if (letter == 'e') correspondingNumber = '3';
      if (letter == 'i') correspondingNumber = '1';
      if (letter == 'o') correspondingNumber = '0';
      if (letter == 'u') correspondingNumber = '_';
      
      // validating change
      if (correspondingNumber) split[index] = correspondingNumber;
    });

    return split.join('');
  }
}
