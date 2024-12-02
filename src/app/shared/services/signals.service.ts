import { Injectable, signal } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class SignalsService {
	filtroBusqueda = signal<string>('');

	public updateFiltroBusqueda(value: string): void {
		this.filtroBusqueda.set(value);
	}
}
