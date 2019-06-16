import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pizza } from 'src/app/models/pizza/pizza';

@Component({
  selector: 'pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.css']
})
export class PizzaItemComponent implements OnInit {
  @Input() pizza: Pizza;
  @Output() onAdd : EventEmitter<Pizza> = new EventEmitter();

  _selected: boolean;
  pizzaToAdd: Pizza;
  @Input()
  set selected(selected: boolean) {
    this._selected = selected;
    this.pizzaToAdd = JSON.parse(JSON.stringify(this.pizza));
  }

  constructor() { }

  ngOnInit() {
  }

  getIngredientsString(): String {
    return this.pizza.ingredients.join(", ");
  }

  toggleIngredient(ingredientToAdd: string) {
    let index = this.pizzaToAdd.ingredients.findIndex(ingredient => ingredient == ingredientToAdd);
    if (index != -1) {
      this.pizzaToAdd.ingredients.splice(index, 1);
    } else {
      this.pizzaToAdd.ingredients.push(ingredientToAdd);
    }

    console.log(this.pizzaToAdd.ingredients.join(", "))
  }

  addPizza() {
    this.onAdd.emit(this.pizzaToAdd);
  }

}
