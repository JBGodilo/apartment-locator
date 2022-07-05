import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullnamePipe } from './pipes/fullname.pipe';

@NgModule({
  exports: [
    FullnamePipe
  ],
  declarations: [
    FullnamePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {}