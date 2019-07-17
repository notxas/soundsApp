import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerSiteComponent } from './server-site.component';

describe('ServerSiteComponent', () => {
  let component: ServerSiteComponent;
  let fixture: ComponentFixture<ServerSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
