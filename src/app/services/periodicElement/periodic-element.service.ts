import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
export interface IPeriodicElement {
  position: number;
  name: string;
  weight:number;
  symbol:string;
}
@Injectable({
  providedIn: 'root'
})
export class PeriodicElementService {
  http=inject(HttpClient);
  getPeriodicEl():Observable<IPeriodicElement[]>{
    return this.http.get<IPeriodicElement[]>('http://localhost:3000/periodicElement');
    
  } 
  createPeriodicEl(element:IPeriodicElement):Observable<IPeriodicElement>{
    return this.http.post<IPeriodicElement>('http://localhost:3000/periodicElement',element);
  }
}
