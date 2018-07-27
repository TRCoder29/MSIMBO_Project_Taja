import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminItineraryComponent } from './admin-itinerary.component';

describe('AdminItineraryComponent', () => {
  let component: AdminItineraryComponent;
  let fixture: ComponentFixture<AdminItineraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminItineraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminItineraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
