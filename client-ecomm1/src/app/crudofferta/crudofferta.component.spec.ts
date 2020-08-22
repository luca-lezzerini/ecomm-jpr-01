import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudoffertaComponent } from './crudofferta.component';

describe('CrudoffertaComponent', () => {
  let component: CrudoffertaComponent;
  let fixture: ComponentFixture<CrudoffertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudoffertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudoffertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
