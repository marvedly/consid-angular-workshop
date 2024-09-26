import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatArrayWithDots',
  standalone: true
})
export class FormatArrayWithDotsPipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): unknown {
    return value.join('.');
  }

}
