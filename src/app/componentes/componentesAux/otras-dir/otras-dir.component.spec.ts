import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrasDirComponent } from './otras-dir.component';

describe('OtrasDirComponent', () => {
  let component: OtrasDirComponent;
  let fixture: ComponentFixture<OtrasDirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtrasDirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrasDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
