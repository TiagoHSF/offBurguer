import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatButtonModule } from "@angular/material/button";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FoodSelectionComponent } from "./food-selection.component";

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, MatButtonModule],
  providers: [],
})
export class AppModule {}
