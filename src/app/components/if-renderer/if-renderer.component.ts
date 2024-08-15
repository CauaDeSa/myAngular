import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-if-renderer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './if-renderer.component.html',
  styleUrl: './if-renderer.component.css'
})
export class IfRendererComponent {
  canShow: boolean = true
  name = 'Matheus'
}
