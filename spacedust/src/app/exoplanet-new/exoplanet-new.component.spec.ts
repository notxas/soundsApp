import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoplanetNewComponent } from './exoplanet-new.component';

describe('ExoplanetNewComponent', () => {
  let component: ExoplanetNewComponent;
  let fixture: ComponentFixture<ExoplanetNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExoplanetNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoplanetNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
