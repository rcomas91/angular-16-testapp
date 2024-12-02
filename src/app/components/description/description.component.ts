import { Component, effect, inject, signal } from '@angular/core';
import { SignalsService } from 'src/app/shared/services/signals.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
  standalone:true,
})
export class DescriptionComponent {
  readonly _signalService = inject(SignalsService);
  filtroBusqueda = signal(''); 

  constructor() {
    effect(() => {
      this.filtroBusqueda.set(this._signalService.filtroBusqueda());
    }, {allowSignalWrites: true});
}
}