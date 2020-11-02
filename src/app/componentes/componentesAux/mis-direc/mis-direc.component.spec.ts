import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisDirecComponent } from './mis-direc.component';

describe('MisDirecComponent', () => {
  let component: MisDirecComponent;
  let fixture: ComponentFixture<MisDirecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisDirecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisDirecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
