import { Component } from '@angular/core';

@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.css'
})
export class RsvpComponent {

  confirm(type: string) {
    let number = '';

    if (type === 'naga') {
      number = '917358368986';
    } else {
      number = '919940585791';
    }

    const text = `Vanakkam

I will be attending the Shasti Poorthi function.

Regards`;

    const message = encodeURIComponent(text);

    window.open(`https://wa.me/${number}?text=${message}`, '_blank');
  }

}
