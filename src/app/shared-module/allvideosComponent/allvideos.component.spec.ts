import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllvideosComponent } from './allvideos.component';

describe('AllvideosComponent', () => {
  let component: AllvideosComponent;
  let fixture: ComponentFixture<AllvideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllvideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
