import { Component, signal } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, ViewChild, inject} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { IPeriodicElement, PeriodicElementService } from 'src/app/services/periodicElement/periodic-element.service';
import { CommonModule, getLocaleFirstDayOfWeek } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';



// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-guards-list',
  templateUrl: './guards-list.component.html',
  styleUrls: ['./guards-list.component.scss'],
  standalone:true,
  imports:[MatTableModule, MatSortModule,  MatButtonModule]
})
export class GuardsListComponent {
Update(elem:IPeriodicElement) {
  elem.symbol='Change';
  this._periodicElementService.updatePeriodicEl(elem).subscribe((response)=>{
    const index= this.periodicElementList().findIndex((pe)=>pe.id===elem.id);
    this.periodicElementList.mutate((periodicElementList)=>(periodicElementList[index]=elem));

  })

}
 
AddElement() {
  //TODO FIX WAY FOR GENERATE THE IDS
  const id=Math.random();
  const elem = {id:id,position: 2, name: 'Helium', weight:  4.0026, symbol: 'He'} as IPeriodicElement;
   this._periodicElementService.createPeriodicEl(elem).subscribe((response)=>{
    this.periodicElementList.set([...this.periodicElementList(),elem])
    console.log(this.periodicElementList()); 
    this.dataSource.data = this.periodicElementList();
   });
 }

  _periodicElementService = inject(PeriodicElementService);
  private _liveAnnouncer = inject(LiveAnnouncer);
  periodicElementList=signal<IPeriodicElement[]>([])

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','Delete','Update'];
  dataSource = new MatTableDataSource();

  DeleteElem(id:number){  
    this._periodicElementService.deletePeriodicEl(id).subscribe((response)=>{
      this.periodicElementList.set(this.periodicElementList().filter((pelem)=>pelem.id !== id));
      this.dataSource.data = this.periodicElementList();
      console.log(this.periodicElementList()); 


    })
  }
  
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  constructor() {
    this._periodicElementService.getPeriodicEl().subscribe((response: IPeriodicElement[]) => {
      this.periodicElementList.set(response);
      console.log(response);
      this.dataSource.data = this.periodicElementList();
  });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
