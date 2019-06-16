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
// The ShopPage which includes the list of available pizzas and the shoppingcart
export class ShopPageComponent implements OnInit {
  selectedPizza: Pizza;

  // Uses the PizzaDataService to fetch the stored pizzas and the ShoppingCartService to track the cart
  constructor(private pizzaService: PizzaDataService, private cart: ShoppingCartService) { }

  ngOnInit() {
  }

  // Returns true if the user clicked on the given pizza. Will set the state of the PizzaItemComponent to selected
  pizzaIsSelected(pizza: Pizza): boolean {
    return this.selectedPizza != null && this.selectedPizza.id == pizza.id;
  }

  // Gets the list of stored pizzas from the service
  get pizzas() {
    return this.pizzaService.getPizzas();
  }

  // Sets the selected pizza when the user clicks on one of the pizzas in the list
  selectPizzaToAdd(pizza: Pizza) {
    this.selectedPizza = pizza;
  }

  // Adds the given pizza to the cart. Emitted by the PizzaItemComponent
  addPizza(pizza: Pizza) {
    this.cart.addPizza(pizza);
  }
}
