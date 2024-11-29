import { Component } from '@angular/core';
import { MainContainerComponent } from '../layout';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone:true,
  imports:[MainContainerComponent]
})
export class FooterComponent {

}
