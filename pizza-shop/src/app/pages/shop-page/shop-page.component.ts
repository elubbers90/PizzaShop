import { Component, OnInit } from '@angular/core';
import { PizzaDataService } from 'src/app/services/pizza-data/pizza-data.service';
import { Pizza } from 'src/app/models/pizza/pizza';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css'],
  providers: [PizzaDataService],
})
export class ShopPageComponent implements OnInit {
  selectedPizza: Pizza;

  constructor(private pizzaService: PizzaDataService, private cart: ShoppingCartService) { }

  ngOnInit() {
  }

  pizzaIsSelected(pizza: Pizza): boolean {
    return this.selectedPizza != null && this.selectedPizza.id == pizza.id;
  }

  get pizzas() {
    return this.pizzaService.getPizzas();
  }

  selectPizzaToAdd(pizza: Pizza) {
    this.selectedPizza = pizza;
  }

  addPizza(pizza: Pizza) {
    this.cart.addPizza(pizza);
  }
}
