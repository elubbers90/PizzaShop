import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Pizza } from 'src/app/models/pizza/pizza';

@Component({
  selector: 'pizza-edit-item',
  templateUrl: './pizza-edit-item.component.html',
  styleUrls: ['./pizza-edit-item.component.css']
})
export class PizzaEditItemComponent implements OnInit {
  @Input() pizza: Pizza;
  @Output() onDelete : EventEmitter<Pizza> = new EventEmitter();
  @Output() onEdit : EventEmitter<Pizza> = new EventEmitter();

  pizzaForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { 
  }

  ngOnInit() {
    this.pizzaForm = new FormGroup({
      name: this.formBuilder.control(this.pizza.name, Validators.required),
      description: new FormControl(this.pizza.description),
      price: this.formBuilder.control(this.pizza.price, Validators.required),
      ingredients: this.formBuilder.array(this.pizza.ingredients)
    });
  }

  get ingredients(): FormArray { 
    return this.pizzaForm.get('ingredients') as FormArray; 
  }

  deletePizza() {
    this.onDelete.emit(this.pizza);
  }

  editPizza() {
    this.pizza.name = this.pizzaForm.value.name;
    this.pizza.description = this.pizzaForm.value.description;
    this.pizza.price = this.pizzaForm.value.price;
    this.pizza.ingredients = this.pizzaForm.value.ingredients;
    this.onEdit.emit(this.pizza);
  }
  
  addIngredient() {
    this.ingredients.push(this.formBuilder.control('', Validators.required));
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }
}
