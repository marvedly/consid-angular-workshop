import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatArray',
  standalone: true
})
export class FormatArrayPipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): unknown {
    return value.join(', ');
  }

}
