import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  size = '16px'
  color = 'black'
  font = 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif'

  classes = ["green-title", "small-title"]
}