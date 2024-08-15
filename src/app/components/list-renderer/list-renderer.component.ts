import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Pokemon } from '../../interfaces/Pokemon';

@Component({
  selector: 'app-list-renderer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-renderer.component.html',
  styleUrl: './list-renderer.component.css'
})
export class ListRendererComponent {
  pokemons: Pokemon[] = [
    {id: 1 , name: "Bulbasaur", type1: "Grass", type2: "Poison", generation: 1, hp: 45, attack: 49, defense: 49, spAttack: 65, spDefense: 65, speed: 45, color: "rgb(1, 129, 1)"},
    {id: 5 , name: "Charmander", type1: "Fire", type2: "", generation: 1, hp: 39, attack: 52, defense: 43, spAttack: 60, spDefense: 50, speed: 65, color: "rgb(153, 4, 4)"},
    {id: 10 , name: "Squirtle", type1: "Water", type2: "", generation: 1, hp: 44, attack: 48, defense: 65, spAttack: 50, spDefense: 64, speed: 43, color: "rgb(2, 53, 163)"}
  ]

  pokeData = {
    hp: 0, 
    attack: 0, 
    defense: 0,
    spAttack: 0,
    spDefense: 0, 
    speed: 0,
    color: '',
  }

  showData(pokemon: Pokemon){
    if (this.pokeData.hp == pokemon.hp){
      this.pokeData.hp = 0
      this.pokeData.attack = 0
      this.pokeData.defense = 0
      this.pokeData.spAttack = 0
      this.pokeData.spDefense = 0
      this.pokeData.speed = 0
      this.pokeData.color = ''
    }

    else {
      this.pokeData.hp = pokemon.hp
      this.pokeData.attack = pokemon.attack
      this.pokeData.defense = pokemon.defense
      this.pokeData.spAttack = pokemon.spAttack
      this.pokeData.spDefense = pokemon.spDefense
      this.pokeData.speed = pokemon.speed
      this.pokeData.color = pokemon.color
    }
  }
}