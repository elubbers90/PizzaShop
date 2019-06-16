import { Injectable } from '@angular/core';
import { Pizza } from 'src/app/models/pizza/pizza';
import { PizzaDataService } from '../pizza-data/pizza-data.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private pizzas: Pizza[] = [];

  constructor(private pizzaDataService: PizzaDataService) { 
    this.pizzas = this.getCartFromStorage();
    this.validateCart();
  }

  validateCart() {
    let availablePizzas = this.pizzaDataService.getPizzas();
    this.pizzas = this.pizzas.filter(pizza => {
      return availablePizzas.findIndex(availablePizza => pizza.id == availablePizza.id) != -1;
    });
  }

  addPizza(pizza: Pizza) {
    this.pizzas.push(JSON.parse(JSON.stringify(pizza)));
    this.saveCart();
  }

  removePizza(index: number) {
    this.pizzas.splice(index, 1);
    this.saveCart();
  }

  saveCart() {
    localStorage.setItem("shoppingCart", JSON.stringify(this.pizzas));
  }

  getCartFromStorage(): Pizza[] {
    let data = localStorage.getItem("shoppingCart");
    if (data == null) {
      return [];
    } else {
      return JSON.parse(data);
    }
  }

  getPrice(): number {
    return this.pizzas.reduce((total, pizza) => total + (pizza.price || 0), 0);
  }

  getCart(): Pizza[] {
    return this.pizzas;
  }
}
