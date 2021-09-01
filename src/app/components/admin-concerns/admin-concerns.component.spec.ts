import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConcernsComponent } from './admin-concerns.component';

describe('AdminConcernsComponent', () => {
  let component: AdminConcernsComponent;
  let fixture: ComponentFixture<AdminConcernsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConcernsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConcernsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
