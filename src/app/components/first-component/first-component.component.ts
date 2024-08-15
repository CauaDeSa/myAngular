import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name = 'Cauã'
  age = 19
  parents = ['Elisangela', 'Carmo']
  car = {
    name: 'Gol',
    year: '1991',
    color: 'Silver',
    brand: 'Volkswagen',

    toString() { return this.brand + " " + this.name + " " + this.year + ", " + this.color }
  }
}