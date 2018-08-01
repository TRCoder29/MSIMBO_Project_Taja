import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClientsNewComponent } from './admin-clients-new.component';

describe('AdminClientsNewComponent', () => {
  let component: AdminClientsNewComponent;
  let fixture: ComponentFixture<AdminClientsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClientsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClientsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
