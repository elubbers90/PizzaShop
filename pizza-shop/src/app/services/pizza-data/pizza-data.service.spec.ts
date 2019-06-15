import {TestBed, inject} from '@angular/core/testing';
import { PizzaDataService } from './pizza-data.service';
import { Pizza } from 'src/app/models/pizza/pizza';

let service: PizzaDataService;

describe('PizzaDataService', () => {
  beforeEach(() => {
    localStorage.clear();

    TestBed.configureTestingModule({
      providers: [PizzaDataService]
    });
  });

  it('should ...', inject([PizzaDataService], (service: PizzaDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getPizzas()', () => {

    it('should return an array of pizzas', inject([PizzaDataService], (service: PizzaDataService) => {
      expect(service.getPizzas().length).toBeGreaterThan(0);
    }));
  });

  describe('#addPizza()', () => {

    it('added pizza should have highest id', inject([PizzaDataService], (service: PizzaDataService) => {
      let pizza = new Pizza({
        name: "Margarita",
        description: "This is a pizza margarita",
        price: 10.99,
        ingredients: ["Cheese", "Tomato sauce"],
        image: "http://www.example.com",
      });
      service.addPizza(pizza);
      let pizzas = service.getPizzas();
      let savedPizza = pizzas[pizzas.length - 1];
      expect(savedPizza.id).toEqual(Math.max(...pizzas.map(pizza => pizza.id)));
    }));
  });

  describe('#removePizza()', () => {

    it('pizza should not be present after deleting it', inject([PizzaDataService], (service: PizzaDataService) => {
      let oldPizzas = service.getPizzas();
      service.removePizza(oldPizzas[0].id);
      let newPizzas = service.getPizzas();
      expect(newPizzas.length).toBeLessThan(oldPizzas.length);
    }));
  });

});
