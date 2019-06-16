import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pizza } from 'src/app/models/pizza/pizza';

@Component({
  selector: 'pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.css']
})
// Component to display pizzas on the shoppage and add them to cart
export class PizzaItemComponent implements OnInit {
  // The pizza displayed
  @Input() pizza: Pizza;
  // EventEmitter for when the pizza is added to the cart. Emits to ShopPage and then ShoppingCartService
  @Output() onAdd : EventEmitter<Pizza> = new EventEmitter();

  // To keep track of if the user selected this particular instance of the component
  // We will then show the Add button and the list of ingredients to remove
  _selected: boolean;
  // The pizza that will be added to the cart. Can have less ingredients
  pizzaToAdd: Pizza;
  @Input()
  set selected(selected: boolean) {
    this._selected = selected;
    // Make a copy of the passed in pizza, we don't want to edit that
    this.pizzaToAdd = JSON.parse(JSON.stringify(this.pizza));
  }

  constructor() { }

  ngOnInit() {
  }

  // Gets a readable list of ingredients
  getIngredientsString(): String {
    return this.pizza.ingredients.join(", ");
  }

  // Toggles the ingredient on or off when deciding to add a pizza to the cart
  toggleIngredient(ingredientToAdd: string) {
    let index = this.pizzaToAdd.ingredients.findIndex(ingredient => ingredient == ingredientToAdd);
    if (index != -1) {
      this.pizzaToAdd.ingredients.splice(index, 1);
    } else {
      this.pizzaToAdd.ingredients.push(ingredientToAdd);
    }
  }

  // Emits the pizza to add to the cart
  addPizza() {
    this.onAdd.emit(this.pizzaToAdd);
  }

}
