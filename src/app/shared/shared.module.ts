import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullnamePipe } from './pipes/fullname.pipe';
import { RegisteredAgentsComponent } from './components/registered-agents/registered-agents.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  exports: [
    FullnamePipe, 
    RegisteredAgentsComponent],
  declarations: [
    FullnamePipe, 
    RegisteredAgentsComponent],
  imports: [
    CommonModule,
    MatExpansionModule
  ]
})
export class SharedModule {}