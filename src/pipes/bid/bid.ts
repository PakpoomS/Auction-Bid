import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the BidPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'bid',
})
export class BidPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    let i = parseInt(value)
    i = i+500;
    return i;
  }
}
