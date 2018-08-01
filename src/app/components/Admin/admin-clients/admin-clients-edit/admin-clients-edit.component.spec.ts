import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClientsEditComponent } from './admin-clients-edit.component';

describe('AdminClientsEditComponent', () => {
  let component: AdminClientsEditComponent;
  let fixture: ComponentFixture<AdminClientsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClientsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClientsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
