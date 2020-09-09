import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociazioneColoreComponent } from './associazione-colore.component';

describe('AssociazioneColoreComponent', () => {
  let component: AssociazioneColoreComponent;
  let fixture: ComponentFixture<AssociazioneColoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociazioneColoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociazioneColoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
