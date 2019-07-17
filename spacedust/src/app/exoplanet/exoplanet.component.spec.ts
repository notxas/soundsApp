import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoplanetComponent } from './exoplanet.component';

describe('ExoplanetComponent', () => {
  let component: ExoplanetComponent;
  let fixture: ComponentFixture<ExoplanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExoplanetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoplanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
