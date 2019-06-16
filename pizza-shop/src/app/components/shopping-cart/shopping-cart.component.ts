import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza/pizza';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  pizzas: Pizza[] = [];
  totalPrice: string;

  constructor(private cart: ShoppingCartService) { }

  ngOnInit() {
    this.cart.getCart().subscribe(updatedPizzas => {
      this.pizzas = updatedPizzas;
    });
    this.cart.getPrice().subscribe(updatedPrice => {
      this.totalPrice = updatedPrice.toFixed(2);
    });
  }

  getIngredientsString(pizza: Pizza): String {
    return pizza.ingredients.join(", ");
  }

  removePizza(index: number) {
    this.cart.removePizza(index);
  }
}
