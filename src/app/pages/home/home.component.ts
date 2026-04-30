import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  share() {
    const message = encodeURIComponent(
      "You are invited to our Shasti Poorthi celebration: " + window.location.href
    );
    window.open(`https://wa.me/?text=${message}`, '_blank');
  }

}
