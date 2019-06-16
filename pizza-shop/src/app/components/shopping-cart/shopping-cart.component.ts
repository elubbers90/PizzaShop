import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza/pizza';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  constructor(private cart: ShoppingCartService) { }

  ngOnInit() {
  }

  getIngredientsString(pizza: Pizza): String {
    return pizza.ingredients.join(", ");
  }

  removePizza(index: number) {
    this.cart.removePizza(index);
  }

  getCart(): Pizza[] {
    return this.cart.getCart();
  }

  getTotalPrice(): string {
    return this.cart.getPrice().toFixed(2);
  }
}
