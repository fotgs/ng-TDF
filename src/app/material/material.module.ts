import { NgModule } from "@angular/core";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";

const MaterialComponents = [
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatTabsModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
