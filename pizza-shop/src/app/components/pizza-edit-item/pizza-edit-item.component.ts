import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Pizza } from 'src/app/models/pizza/pizza';

@Component({
  selector: 'pizza-edit-item',
  templateUrl: './pizza-edit-item.component.html',
  styleUrls: ['./pizza-edit-item.component.css']
})
// Component shown in a list on the admin page. Can edit pizzas with this
export class PizzaEditItemComponent implements OnInit {
  // The pizza that can be edit via this instance of the component
  @Input() pizza: Pizza;
  // EventEmitter for when the pizza is deletes. Emits to AdminPage and then to the PizzaDataService
  @Output() onDelete : EventEmitter<Pizza> = new EventEmitter();
  // EventEmitter for when the pizza is edited. Emits to AdminPage and then to the PizzaDataService
  @Output() onEdit : EventEmitter<Pizza> = new EventEmitter();

  pizzaForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { 
  }

  // Creates the form group that will be used to create the edit pizza object
  ngOnInit() {
    this.pizzaForm = new FormGroup({
      name: this.formBuilder.control(this.pizza.name, Validators.required),
      description: new FormControl(this.pizza.description),
      price: this.formBuilder.control(this.pizza.price, Validators.required),
      ingredients: this.formBuilder.array(this.pizza.ingredients)
    });
  }

  // Creates a FormArray to use for the list of ingredients
  get ingredients(): FormArray { 
    return this.pizzaForm.get('ingredients') as FormArray; 
  }

  // Emits that we want to delete this pizza
  deletePizza() {
    this.onDelete.emit(this.pizza);
  }

  // Saves the pizza based on the FormGroup and emits it to the parent
  editPizza() {
    this.pizza.name = this.pizzaForm.value.name;
    this.pizza.description = this.pizzaForm.value.description;
    this.pizza.price = this.pizzaForm.value.price;
    this.pizza.ingredients = this.pizzaForm.value.ingredients;
    this.onEdit.emit(this.pizza);
  }
  
  // Adds a new ingredient to the FormArrat
  addIngredient() {
    this.ingredients.push(this.formBuilder.control('', Validators.required));
  }

  // Removed the ingredient from the FormArray
  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }
}
