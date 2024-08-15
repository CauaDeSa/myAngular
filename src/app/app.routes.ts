import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRendererComponent } from './components/list-renderer/list-renderer.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRendererComponent } from './components/if-renderer/if-renderer.component';
import { EventsComponent } from './components/events/events.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ApiListComponent } from './components/api-list/api-list.component';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';

export const routes: Routes = [
    {path: 'firstComponent', component: FirstComponentComponent},
    {path: 'pokeList', component: ListRendererComponent},
    {path: 'directives', component: DirectivesComponent},
    {path: 'ifRenderer', component: IfRendererComponent},
    {path: 'events', component: EventsComponent},
    {path: 'emitter', component: EmitterComponent},
    {path: 'pipes', component: PipesComponent},
    {path: 'binding', component: TwoWayBindingComponent},
    {path: 'itemsList', component: ItemsListComponent},
    {path: 'apiList', component: ApiListComponent},
    {path: 'apiList/:id', component: PokeDetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutesModule {}