import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesComponentComponent } from './stories-component.component';

describe('StoriesComponentComponent', () => {
  let component: StoriesComponentComponent;
  let fixture: ComponentFixture<StoriesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoriesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoriesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
