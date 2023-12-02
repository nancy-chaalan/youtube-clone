import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesLoadComponent } from './stories-load.component';

describe('StoriesLoadComponent', () => {
  let component: StoriesLoadComponent;
  let fixture: ComponentFixture<StoriesLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoriesLoadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoriesLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
