import { Injectable } from '@angular/core';
import { Pizza } from 'src/app/models/pizza/pizza';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private pizzas: Pizza[] = [];
  private totalPrice: number = 0;
  private pizzasSubject: BehaviorSubject<Pizza[]> = new BehaviorSubject<Pizza[]>(this.pizzas);
  private priceSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { 
    this.pizzas = this.getCartFromStorage();
    this.pizzasSubject.next(this.pizzas);
    this.priceSubject.next(this.getTotalPrice());
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
    ;
    this.pizzasSubject.next([...this.pizzas]);
    this.priceSubject.next(this.getTotalPrice());
  }

  getCartFromStorage(): Pizza[] {
    let data = localStorage.getItem("shoppingCart");
    if (data == null) {
      return [];
    } else {
      return JSON.parse(data);
    }
  }

  getTotalPrice(): number {
    return this.pizzas.reduce((total, pizza) => total + (pizza.price || 0), 0);
  }

  getCart(): Observable<Pizza[]> {
    return this.pizzasSubject.asObservable();
  }

  getPrice(): Observable<number> {
    return this.priceSubject.asObservable();
  }
}
