import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from 'src/app/models/pizza/pizza';

@Component({
  selector: 'pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.css']
})
export class PizzaItemComponent implements OnInit {
  @Input() pizza: Pizza;

  constructor() { }

  ngOnInit() {
  }

  getIngredientsString(): String {
    return this.pizza.ingredients.join(", ");
  }

}
