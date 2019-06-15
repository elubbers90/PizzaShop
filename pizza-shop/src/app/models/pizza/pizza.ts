export class Pizza {
    id: number;
    name: string;
    description: string;
    price: number;
    ingredients: string[];
    image: string;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
      //TODO
      this.id = 1;
    }
}
