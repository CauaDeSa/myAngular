import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SimplePokemon } from '../../interfaces/SimplePokemon';
import { ApiListService } from '../../services/api-list.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-api-list',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './api-list.component.html',
  styleUrl: './api-list.component.css'
})
export class ApiListComponent {
  pokemons: SimplePokemon[] = [ ];

  constructor(private apiListService: ApiListService) {
    this.getPokemons();
  }

  getPokemons(): void {
    this.apiListService.getAll().subscribe(pokemons => this.pokemons = pokemons);
  }
}
