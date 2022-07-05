import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {
  transform(firstname?: string, lastname?: string) {
    return `${firstname} ${lastname}`;
  }
}