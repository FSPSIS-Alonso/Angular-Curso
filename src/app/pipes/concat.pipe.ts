import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatValue',
})
export class ConcatPipe implements PipeTransform {
  transform(value: string, concat?: string): string {
    return `${value} ${concat || ''}`;
  }
}

// Hola mundo | concat : "mundo" ==== Hola mundo mundo
