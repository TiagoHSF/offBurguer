import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-food-selection",
  templateUrl: "./food-selection.component.html",
  styleUrls: ["./food-selection.component.scss"],
})
export class FoodSelectionComponent implements OnInit {
  public expandOff = false;
  public expandHouse = false;
  public expandExtra = false;

  constructor() {}

  ngOnInit(): void {}

  expand(event: string) {
    if (event === "off") {
      this.expandOff = !this.expandOff;
    }
    if (event === "house") {
      this.expandHouse = !this.expandOff;
    }
    if (event === "extra") {
      this.expandExtra = !this.expandExtra;
    }
  }
}
