import { SimplePokemon } from "./SimplePokemon"

export interface Pokemon extends SimplePokemon{
    generation: number
    hp: number
    attack: number
    defense: number
    spAttack: number
    spDefense: number
    speed: number
}