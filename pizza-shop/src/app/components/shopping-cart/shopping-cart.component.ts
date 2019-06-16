import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza/pizza';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
// The component thaking care of the shopping cart on the ShopPage
export class ShoppingCartComponent implements OnInit {
  // Uses the ShoppingCartService which tracks the content of the cart
  constructor(private cart: ShoppingCartService) { }

  ngOnInit() {
  }

  // Gets a readable string of ingredients for the given pizza
  getIngredientsString(pizza: Pizza): String {
    return pizza.ingredients.join(", ");
  }

  // Sends the index of the pizza to remove to the cart
  removePizza(index: number) {
    this.cart.removePizza(index);
  }

  // Gets the list of current pizzas in the cart
  getCart(): Pizza[] {
    return this.cart.getCart();
  }

  // Gets the total price of the cart from the service
  getTotalPrice(): string {
    return this.cart.getPrice().toFixed(2);
  }
}
