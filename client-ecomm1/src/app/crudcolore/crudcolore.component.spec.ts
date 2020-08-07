import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDColoreComponent } from './crudcolore.component';

describe('CRUDColoreComponent', () => {
  let component: CRUDColoreComponent;
  let fixture: ComponentFixture<CRUDColoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRUDColoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRUDColoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
