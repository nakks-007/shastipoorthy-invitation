import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuOpen = false;

  daysLeft: number = 0;

  ngOnInit() {
    const eventDate = new Date('2026-05-18T12:00:00');
    const today = new Date();

    const diffTime = eventDate.getTime() - today.getTime();
    this.daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}
