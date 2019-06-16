import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pizza } from 'src/app/models/pizza/pizza';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'new-pizza',
  templateUrl: './new-pizza.component.html',
  styleUrls: ['./new-pizza.component.css']
})
export class NewPizzaComponent implements OnInit {
  @Output() onAdd : EventEmitter<Pizza> = new EventEmitter();

  pizzaForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
   this.createForm();
  }

  createForm() {
    this.pizzaForm = new FormGroup({
      name: new FormControl(""),
      description: new FormControl(""),
      price: new FormControl(""),
      ingredients: this.formBuilder.array([])
    });
  }

  get ingredients(): FormArray { 
    return this.pizzaForm.get('ingredients') as FormArray; 
  }

  addPizza() {
    let pizza = new Pizza({
      name: this.pizzaForm.value.name,
      description: this.pizzaForm.value.description,
      price: this.pizzaForm.value.price,
      ingredients: this.pizzaForm.value.ingredients,
      image: "assets/pizza.jpg"
    });
    this.onAdd.emit(pizza);
    this.createForm();
  }
  
  addIngredient() {
    this.ingredients.push(this.formBuilder.control(''));
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

}
