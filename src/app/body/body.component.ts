import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { GuardsListComponent } from '../components/guards-list';
import { CalendarComponent } from '../calendar';
import { DescriptionComponent } from '../components/description';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  standalone:true,
  imports:[MatTabsModule, DescriptionComponent,
    GuardsListComponent,
    CalendarComponent,]
})
export class BodyComponent {

}
