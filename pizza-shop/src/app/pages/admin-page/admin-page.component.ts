import { Component, OnInit } from '@angular/core';
import { PizzaDataService } from 'src/app/services/pizza-data/pizza-data.service';
import { Pizza } from 'src/app/models/pizza/pizza';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private pizzaService: PizzaDataService) { }

  ngOnInit() {
  }

  deletePizza(pizza: Pizza) {
    this.pizzaService.removePizza(pizza.id);
  }

  editPizza(pizza: Pizza) {
    this.pizzaService.editPizza(pizza);
  }

  addPizza(pizza: Pizza) {
    this.pizzaService.addPizza(pizza);
  }

  get pizzas() {
    return this.pizzaService.getPizzas();
  }
}
