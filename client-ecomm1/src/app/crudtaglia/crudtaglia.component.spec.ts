import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudtagliaComponent } from './crudtaglia.component';

describe('CrudtagliaComponent', () => {
  let component: CrudtagliaComponent;
  let fixture: ComponentFixture<CrudtagliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudtagliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudtagliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
