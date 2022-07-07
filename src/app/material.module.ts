import { NgModule } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  imports: [
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class MaterialModule {}