import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-food-selection",
  templateUrl: "./food-selection.component.html",
  styleUrls: ["./food-selection.component.scss"],
})
export class FoodSelectionComponent implements OnInit {
  isCheckedLanche = false;
  isCheckedPizza = false;

  public expandOff = false;
  public expandHouse = false;
  public expandExtra = false;

  public expandOffPizza = false;
  public expandQueijoPizza = false;
  public expandBadassPizza = false;

  constructor() {}

  ngOnInit(): void {}

  expand(event: string) {
    if (event === "off") {
      this.expandOff = !this.expandOff;
    }
    if (event === "house") {
      this.expandHouse = !this.expandHouse;
    }
    if (event === "extra") {
      this.expandExtra = !this.expandExtra;
    }
  }

  expandPizza(event: string) {
    if (event === "off") {
      this.expandOffPizza = !this.expandOffPizza;
    }
    if (event === "queijo") {
      this.expandQueijoPizza = !this.expandQueijoPizza;
    }
    if (event === "badass") {
      this.expandBadassPizza = !this.expandBadassPizza;
    }
  }

  check(event: string) {
    if (event === "lanche") {
      this.isCheckedLanche = !this.isCheckedLanche;
      this.expandOff = false;
      this.expandHouse = false;
      this.expandExtra = false;
    }
    if (event === "pizza") {
      this.isCheckedPizza = !this.isCheckedPizza;
      this.expandOffPizza = false;
      this.expandQueijoPizza = false;
      this.expandBadassPizza = false;
    }
  }
}
