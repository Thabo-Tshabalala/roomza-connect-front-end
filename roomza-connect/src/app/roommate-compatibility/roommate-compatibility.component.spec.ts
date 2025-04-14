import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoommateCompatibilityComponent } from './roommate-compatibility.component';

describe('RoommateCompatibilityComponent', () => {
  let component: RoommateCompatibilityComponent;
  let fixture: ComponentFixture<RoommateCompatibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoommateCompatibilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoommateCompatibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
