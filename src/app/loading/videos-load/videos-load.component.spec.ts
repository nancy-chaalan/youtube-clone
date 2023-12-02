import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosLoadComponent } from './videos-load.component';

describe('VideosLoadComponent', () => {
  let component: VideosLoadComponent;
  let fixture: ComponentFixture<VideosLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosLoadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
