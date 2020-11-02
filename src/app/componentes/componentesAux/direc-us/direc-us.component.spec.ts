import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirecUsComponent } from './direc-us.component';

describe('DirecUsComponent', () => {
  let component: DirecUsComponent;
  let fixture: ComponentFixture<DirecUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirecUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirecUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
