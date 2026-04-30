import { Component } from '@angular/core';

@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.css'
})
export class RsvpComponent {

  confirm() {
    const phoneNumber = '917358368986'; // add country code (91 for India)

    const message = encodeURIComponent(
      "Vanakkam 🙏, I will be attending the Shasti Poorthi function of your parents on 18th May."
    );

    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(url, '_blank');
  }

}
