import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-educator',
  templateUrl: './educator.component.html',
  styleUrls: ['./educator.component.scss']
})
export class EducatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
export class SelectCustomTriggerExample {
  toppings = new FormControl();

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
