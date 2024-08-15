import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiListService } from '../../services/api-list.service';
import { SimplePokemon } from '../../interfaces/SimplePokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-poke-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './poke-detail.component.html',
  styleUrl: './poke-detail.component.css'
})
export class PokeDetailComponent {
  pokemon!: SimplePokemon;

  constructor(private apiListService: ApiListService, private route: ActivatedRoute) {
    this.getPokemon().subscribe(pokemon => this.pokemon = pokemon);
   }

   getPokemon() {
      return this.apiListService.getById(this.route.snapshot.params['id']);
   }

   removePokemon() {
      this.apiListService.removeById(this.route.snapshot.params['id']);
      this.pokemon = {} as SimplePokemon;
   }
}