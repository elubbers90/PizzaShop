import { Injectable } from '@angular/core';
import { Pizza } from 'src/app/models/pizza/pizza';
import config from '../../../assets/config.json';

@Injectable({
  providedIn: 'root'
})
export class PizzaDataService {
  private pizzas: Pizza[] = [];

  constructor() { 
    this.pizzas = this.getPizzas();
  }

  addPizza(pizza: Pizza) {
    pizza.id = Math.max(...this.pizzas.map(pizza => pizza.id)) + 1;
    this.pizzas.push(pizza);
    this.savePizzas();
  }

  removePizza(id: Number) {
    this.pizzas = this.pizzas.filter(
      pizza => pizza.id != id
    );
  }
  
  editPizza(edited: Pizza) {
    let index = this.pizzas.findIndex(
      pizza => pizza.id == edited.id
    );
    if (index == -1) {
      this.addPizza(edited);
    } else {
      this.pizzas.splice(index, 1, edited);
      this.savePizzas();
    }
  }

  savePizzas() {
    localStorage.setItem("pizzas", JSON.stringify(this.pizzas));
  }

  getPizzas(): Pizza[] {
    let data = localStorage.getItem("pizzas");
    if (data == null) {
      return config.defaultPizzas;
    } else {
      return JSON.parse(data);
    }
  }
}
