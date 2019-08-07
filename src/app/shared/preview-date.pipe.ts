import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({
  name: 'previewDate'
})
export class PreviewDatePipe implements PipeTransform {

  transform(value: Date, ...args: any[]): any {
    const ref = new Date();
    
    const sameDay = value.getDay() === ref.getDay();
    if(sameDay) {
      return `${formatDate(value, 'hh:mm aa', 'en')}`
    } else {
      return `${formatDate(value, 'MMM dd', 'en')}`
    }
    return null;
  }

}
