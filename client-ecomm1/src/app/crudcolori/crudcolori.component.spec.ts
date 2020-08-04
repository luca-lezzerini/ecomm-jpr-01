import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDColoriComponent } from './crudcolori.component';

describe('CRUDColoriComponent', () => {
  let component: CRUDColoriComponent;
  let fixture: ComponentFixture<CRUDColoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRUDColoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRUDColoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
