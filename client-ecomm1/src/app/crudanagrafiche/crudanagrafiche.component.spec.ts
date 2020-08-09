import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudanagraficheComponent } from './crudanagrafiche.component';

describe('CrudanagraficheComponent', () => {
  let component: CrudanagraficheComponent;
  let fixture: ComponentFixture<CrudanagraficheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudanagraficheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudanagraficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
