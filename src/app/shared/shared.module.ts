import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewDatePipe } from './preview-date.pipe';



@NgModule({
  declarations: [PreviewDatePipe],
  imports: [
    CommonModule
  ],
  exports: [PreviewDatePipe]
})
export class SharedModule { }
