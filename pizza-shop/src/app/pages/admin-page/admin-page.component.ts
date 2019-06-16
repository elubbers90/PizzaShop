import { Component, OnInit } from '@angular/core';
import { PizzaDataService } from 'src/app/services/pizza-data/pizza-data.service';
import { Pizza } from 'src/app/models/pizza/pizza';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
// Takes care of the admin page, which includes the list of editable saved pizzas and has a component to create new pizzas
export class AdminPageComponent implements OnInit {

  //Uses the PizzaDataService to fetch and edit the stored pizzas
  constructor(private pizzaService: PizzaDataService) { }

  ngOnInit() {
  }

  // Send the id of the pizza to delete to the service. Received from the PizzaEditItemComponent emit
  deletePizza(pizza: Pizza) {
    this.pizzaService.removePizza(pizza.id);
  }

  // Sends the edited pizza to the service. Received from the PizzaEditItemComponent emit
  editPizza(pizza: Pizza) {
    this.pizzaService.editPizza(pizza);
  }

  // Sends the newly created pizza to the service. . Received from the NewPizzaComponent emit
  addPizza(pizza: Pizza) {
    this.pizzaService.addPizza(pizza);
  }

  // Returns the list of stored pizzas
  get pizzas() {
    return this.pizzaService.getPizzas();
  }
}
