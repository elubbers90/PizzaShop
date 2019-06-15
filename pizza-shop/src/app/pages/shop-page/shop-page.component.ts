import { Component, OnInit } from '@angular/core';
import { PizzaDataService } from 'src/app/services/pizza-data/pizza-data.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css'],
  providers: [PizzaDataService],
})
export class ShopPageComponent implements OnInit {

  constructor(private pizzaService: PizzaDataService) { }

  ngOnInit() {
  }

  get pizzas() {
    return this.pizzaService.getPizzas();
  }
}
