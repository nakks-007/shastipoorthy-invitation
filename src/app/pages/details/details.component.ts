import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  activeIndex: number | null = null;

  ngOnInit() {
    this.activeIndex = 0;
  }

  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
