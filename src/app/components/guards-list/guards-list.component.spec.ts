import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardsListComponent } from './guards-list.component';

describe('GuardsListComponent', () => {
  let component: GuardsListComponent;
  let fixture: ComponentFixture<GuardsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardsListComponent]
    });
    fixture = TestBed.createComponent(GuardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
