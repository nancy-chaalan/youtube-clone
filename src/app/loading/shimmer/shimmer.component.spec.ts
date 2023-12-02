import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShimmerComponent } from './shimmer.component';

describe('ShimmerComponent', () => {
  let component: ShimmerComponent;
  let fixture: ComponentFixture<ShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShimmerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
