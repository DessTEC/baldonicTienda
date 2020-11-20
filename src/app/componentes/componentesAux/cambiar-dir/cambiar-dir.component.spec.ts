import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarDirComponent } from './cambiar-dir.component';

describe('CambiarDirComponent', () => {
  let component: CambiarDirComponent;
  let fixture: ComponentFixture<CambiarDirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarDirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
