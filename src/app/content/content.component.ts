import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  hostDirectives: [RouterOutlet]
})
export class ContentComponent {
  cards = [
    {
      1: '1',
      name: 'Scooter',
      photoUrl: './assets/pictures/elements/scooter.jpg',
    },
    {
      2: '2',
      name: 'Boots',
      photoUrl: './assets/pictures/elements/boots.webp',
    },
    {
      3: '3',
      name: 'Hoodie',
      photoUrl: './assets/pictures/elements/hoodie.webp',
    },
    {
      4: '4',
      name: 'Socks',
      photoUrl: './assets/pictures/elements/Socks.jpeg',
    },
    {
      5: '5',
      name: 'Zippo',
      photoUrl: './assets/pictures/elements/zippo.jpg',
    },
    {
      6: '6',
      name: 'Case',
      photoUrl: './assets/pictures/elements/case.jpg',
    },
    {
      7: '7',
      name: 'Bag',
      photoUrl: './assets/pictures/elements/bag.jpg',
    },
    {
      8: '8',
      name: 'Hoodie',
      photoUrl: './assets/pictures/elements/hoodies2.webp',
    },
    {
      9: '9',
      name: 'Shorts',
      photoUrl: './assets/pictures/elements/shorts.webp',
    },
  ];

}
