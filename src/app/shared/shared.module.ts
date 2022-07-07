import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullnamePipe } from '@shared/pipes';
import * as components from '@shared/components';
import { MaterialModule } from '../material.module';

@NgModule({
  exports: [
    FullnamePipe, 
    ...components.components
  ],
  declarations: [
    FullnamePipe, 
    ...components.components
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class SharedModule {}
