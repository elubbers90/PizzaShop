import { Injectable } from '@angular/core';
import { Pizza } from 'src/app/models/pizza/pizza';
import { PizzaDataService } from '../pizza-data/pizza-data.service';

@Injectable({
  providedIn: 'root'
})
// Service that maintains the shopping cart. Saved in localstorage to maintain a session
export class ShoppingCartService {
  private pizzas: Pizza[] = [];

  // Upon starting the service we get the data from storage and validate the given pizzas.
  // Uses the PizzaDataService for the latter
  constructor(private pizzaDataService: PizzaDataService) { 
    this.pizzas = this.getCartFromStorage();
    this.validateCart();
  }

  // validates the saved cart.
  // Pizzas that no longer exist based on either id or have a different price should definitely not be orderable
  validateCart() {
    let availablePizzas = this.pizzaDataService.getPizzas();
    this.pizzas = this.pizzas.filter(pizza => {
      return availablePizzas.findIndex(
        availablePizza => pizza.id == availablePizza.id && pizza.price == availablePizza.price
      ) != -1;
    });
  }

  // Adds a copy of the given pizza to the cart and saves it to storage
  addPizza(pizza: Pizza) {
    this.pizzas.push(JSON.parse(JSON.stringify(pizza)));
    this.saveCart();
  }

  // Removes a pizza based on the index and saves it to storage
  removePizza(index: number) {
    this.pizzas.splice(index, 1);
    this.saveCart();
  }

  // Saves to cart to localstorage
  saveCart() {
    localStorage.setItem("shoppingCart", JSON.stringify(this.pizzas));
  }

  // Gets the cart from storage, or creates an empty cart if none exists
  getCartFromStorage(): Pizza[] {
    let data = localStorage.getItem("shoppingCart");
    if (data == null) {
      return [];
    } else {
      return JSON.parse(data);
    }
  }

  // Calculates the totalprice of the pizzas in the cart
  getPrice(): number {
    return this.pizzas.reduce((total, pizza) => total + (pizza.price || 0), 0);
  }

  // Returns the cart to any class that asks for it
  getCart(): Pizza[] {
    return this.pizzas;
  }
}
