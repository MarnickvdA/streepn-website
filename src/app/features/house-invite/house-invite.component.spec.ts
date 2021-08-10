import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseInviteComponent } from './house-invite.component';

describe('HouseInviteComponent', () => {
  let component: HouseInviteComponent;
  let fixture: ComponentFixture<HouseInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseInviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
