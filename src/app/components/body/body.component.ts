import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { DescriptionComponent } from '../description';
import { CalendarComponent } from '../calendar';
import { GuardsListComponent } from '../guards-list';


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
