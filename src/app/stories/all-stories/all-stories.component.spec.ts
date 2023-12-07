import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStoriesComponent } from './all-stories.component';

describe('AllStoriesComponent', () => {
  let component: AllStoriesComponent;
  let fixture: ComponentFixture<AllStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllStoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
