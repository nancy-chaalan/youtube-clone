import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightbarvideosComponent } from './rightbarvideos.component';

describe('RightbarvideosComponent', () => {
  let component: RightbarvideosComponent;
  let fixture: ComponentFixture<RightbarvideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightbarvideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightbarvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
