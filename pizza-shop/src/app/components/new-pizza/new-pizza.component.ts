import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pizza } from 'src/app/models/pizza/pizza';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'new-pizza',
  templateUrl: './new-pizza.component.html',
  styleUrls: ['./new-pizza.component.css']
})
// Component that takes care of creating a new pizza object
export class NewPizzaComponent implements OnInit {
  // EventEmitter used when the form is submit, to send the pizza to the AdminPage and then the PizzaDataService
  @Output() onAdd : EventEmitter<Pizza> = new EventEmitter();

  // The FormGroup taking care of the new pizza form
  pizzaForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
   this.createForm();
  }

  // Creates the form group that will be used to create the new pizza object
  createForm() {
    this.pizzaForm = new FormGroup({
      name: this.formBuilder.control('', Validators.required),
      description: new FormControl(""),
      price: this.formBuilder.control('', Validators.required),
      ingredients: this.formBuilder.array([])
    });
  }

  // Creates a FormArray to use for the list of ingredients
  get ingredients(): FormArray { 
    return this.pizzaForm.get('ingredients') as FormArray; 
  }

  // Creates a new pizza object based on the FormGroup and emits it to the parent.
  // Creates a new FormGroup to reset the form
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
  
  // Adds a new ingredient to the FormArray
  addIngredient() {
    this.ingredients.push(this.formBuilder.control('', Validators.required));
  }

  // Removed the ingredient from the FormArray
  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

}
