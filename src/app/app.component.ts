import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ParentDataComponent } from "./components/parent-data/parent-data.component";
import { DirectivesComponent } from "./components/directives/directives.component";
import { IfRendererComponent } from "./components/if-renderer/if-renderer.component";
import { EventsComponent } from "./components/events/events.component";
import { EmitterComponent } from "./components/emitter/emitter.component";
import { ListRendererComponent } from "./components/list-renderer/list-renderer.component";
import { PipesComponent } from "./components/pipes/pipes.component";
import { TwoWayBindingComponent } from "./components/two-way-binding/two-way-binding.component";
import { ItemsListComponent } from "./components/items-list/items-list.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FirstComponentComponent, ParentDataComponent, DirectivesComponent, IfRendererComponent, EventsComponent, EmitterComponent, ListRendererComponent, PipesComponent, TwoWayBindingComponent, ItemsListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedButton: number = 0;
  class = "headerElement";

  buttons = [
    { id: 1, name: 'First Component', class: 'headerElement', route: '/' },
    { id: 2, name: 'PokeList', class: 'headerElement', route: 'pokeList' },
    { id: 3, name: 'Directives', class: 'headerElement', route: 'directives' },
    { id: 4, name: 'If Renderer', class: 'headerElement', route: 'ifRenderer' },
    { id: 5, name: 'Events', class: 'headerElement', route: 'events' },
    { id: 6, name: 'Emitter', class: 'headerElement', route: 'emitter' },
    { id: 7, name: 'Pipes', class: 'headerElement', route: 'pipes' },
    { id: 8, name: 'Binding', class: 'headerElement', route: 'binding' },
    { id: 9, name: 'Items List', class: 'headerElement', route: 'itemsList' },
    { id: 10, name: 'Api PokeList', class: 'headerElement', route: 'apiList' }
  ]

  activate(button: number) {
    this.buttons[button].class = 'selected';
  }
}
