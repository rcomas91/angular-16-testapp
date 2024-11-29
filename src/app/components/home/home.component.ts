import { Component } from '@angular/core';
import { MainContainerComponent } from '../layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone:true,
  imports: [MainContainerComponent]
})
export class HomeComponent {

}
