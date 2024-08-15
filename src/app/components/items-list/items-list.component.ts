import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListService } from '../../services/list.service';
import { Item } from '../../interfaces/Item';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css'
})
export class ItemsListComponent {
  items: Item[] = [
    {id: 1, name: 'Item 1', description: 'Description 1'},
    {id: 2, name: 'Item 2', description: 'Description 2'},
    {id: 3, name: 'Item 3', description: 'Description 3'},
    {id: 4, name: 'Item 4', description: 'Description 4'},
    {id: 5, name: 'Item 5', description: 'Description 5'},
    {id: 6, name: 'Item 6', description: 'Description 6'},
  ]

  constructor(private listService: ListService) { }

  removeItem(item: Item) {
    this.items = this.listService.remove(this.items, item);
  }
}
