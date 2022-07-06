import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullnamePipe } from '@shared/pipes';
import { RegisteredAgentsComponent } from '@shared/components';
import { MatExpansionModule } from '@angular/material/expansion';

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
    MatExpansionModule,
  ]
})
export class SharedModule {}