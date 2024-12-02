import { inject, Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { responseGetGuards200, responseGetGuardsEmpty } from '../mocks/response';
import { environment } from '../enviroments/environment';
import { ResponseGetGuards } from '../interfaces/response.interface';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GuardServiceService {

  private readonly _httpService = inject(HttpClient);
  public useMockGetGuards = true;
  public useMockGetGuardsEmpty = false;
	private readonly delayMock = 1000;


  constructor() { }

  getGuards(): Observable<ResponseGetGuards[]> {
    if (this.useMockGetGuards) {
			return of(responseGetGuards200).pipe(delay(this.delayMock));
		} else if (this.useMockGetGuardsEmpty) {
      return of(responseGetGuardsEmpty).pipe(delay(this.delayMock));
    }
		return this._httpService.get<any>(`${environment.apiGuards}`);
  }
}
