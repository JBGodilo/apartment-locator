import { NgModule } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
  imports: [
    MatExpansionModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatExpansionModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule {}