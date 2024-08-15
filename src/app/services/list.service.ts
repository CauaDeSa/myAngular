import { Injectable } from '@angular/core';
import { Item } from '../interfaces/Item';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  getPokemon(arg0: any) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  remove(items: Item[], item: Item) {
    return items.filter(i => i.id !== item.id);
  }
}
