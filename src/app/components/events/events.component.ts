import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  show: boolean = false;
  Message: string = 'Show'

  showMessage(): void {
    if (this.show)
      this.Message = 'Show'
    else
      this.Message = 'Hide'

    this.show = !this.show;
  }
}
