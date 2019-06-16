import { Injectable } from '@angular/core';
import { Pizza } from 'src/app/models/pizza/pizza';
import config from '../../../assets/config.json';

@Injectable({
  providedIn: 'root'
})
// Service that stores the list of pizzas in localstorage
export class PizzaDataService {
  private pizzas: Pizza[] = [];

  constructor() { 
    this.pizzas = this.getPizzasFromStorage();
  }

  // Adds a pizza to the list of pizzas and saves it in localstorage
  // Sets the id of the pizza to be 0 when it's the first pizza or the highest current id + 1 if not
  addPizza(pizza: Pizza) {
    if (this.pizzas.length == 0){
      pizza.id = 0;
    } else {
      pizza.id = Math.max(...this.pizzas.map(pizza => pizza.id)) + 1;
    }
    this.pizzas.push(pizza);
    this.savePizzas();
  }

  // Removes a pizza based on an id. Saves it in localstorage
  removePizza(id: Number) {
    this.pizzas = this.pizzas.filter(
      pizza => pizza.id != id
    );
    this.savePizzas();
  }
  
  // Edits a given pizza, finds the pizza by id.
  // If the id does not exist it will just add a new pizza.
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

  // Saves the list of pizzas in storage
  savePizzas() {
    localStorage.setItem("pizzas", JSON.stringify(this.pizzas));
  }

  // Gets the pizzas from storage. 
  // If the pizzas item is not present in the storage we will get the 5 default pizzas from the json in the assets folder
  getPizzasFromStorage(): Pizza[] {
    let data = localStorage.getItem("pizzas");
    if (data == null) {
      return config.defaultPizzas;
    } else {
      return JSON.parse(data);
    }
  }

  // Returns the pizzas to any class that asks for it
  getPizzas(): Pizza[] {
    return this.pizzas;
  }
}
