import { Component, Input } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [`
  mat-card {
    margin-top: 20px;
    height: 90%;
  }
  mat-card-actions {
  }
  strong {
    color: #E81E63;
    font-weight: 500;
  }
  

  
`]
})
export class HeroCardComponent {

  @Input() hero!: Hero;

}
