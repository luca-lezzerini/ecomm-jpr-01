import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudspedizioniComponent } from './crudspedizioni.component';

describe('CrudspedizioniComponent', () => {
  let component: CrudspedizioniComponent;
  let fixture: ComponentFixture<CrudspedizioniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudspedizioniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudspedizioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
