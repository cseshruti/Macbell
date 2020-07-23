import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstartComponent } from './istart.component';

describe('IstartComponent', () => {
  let component: IstartComponent;
  let fixture: ComponentFixture<IstartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
