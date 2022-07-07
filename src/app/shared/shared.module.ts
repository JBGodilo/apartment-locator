import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullnamePipe } from '@shared/pipes';
import { RegisteredAgentsComponent } from '@shared/components';
import { MaterialModule } from '../material.module';

@NgModule({
  exports: [
    FullnamePipe, 
    RegisteredAgentsComponent
  ],
  declarations: [
    FullnamePipe, 
    RegisteredAgentsComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class SharedModule {}
