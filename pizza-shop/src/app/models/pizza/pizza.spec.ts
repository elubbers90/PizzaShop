import { Pizza } from './pizza';

describe('Pizza', () => {
  it('should create an instance', () => {
    expect(new Pizza()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let pizza = new Pizza({
      name: "Margarita",
      description: "This is a pizza margarita",
      price: 10.99,
      ingredients: ["Cheese", "Tomato sauce"],
      image: "http://www.example.com",
    });
    expect(pizza.name).toEqual("Margarita");
    expect(pizza.description).toEqual("This is a pizza margarita",);
    expect(pizza.price).toEqual(10.99);
    expect(pizza.ingredients).toEqual(["Cheese", "Tomato sauce"]);
    expect(pizza.image).toEqual("http://www.example.com");
  });
});
