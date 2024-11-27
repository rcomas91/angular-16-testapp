import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { MainContainerComponent } from '../layout';
import { DescriptionComponent } from "../description";
import { GuardsListComponent } from '../guards-list';
import { CalendarComponent } from '../../calendar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone:true,
  imports: [MainContainerComponent, MatTabsModule, DescriptionComponent, GuardsListComponent, CalendarComponent]
})
export class HomeComponent {

}
