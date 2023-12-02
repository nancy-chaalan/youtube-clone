import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EverythingComponent } from './everything.component';

describe('EverythingComponent', () => {
  let component: EverythingComponent;
  let fixture: ComponentFixture<EverythingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EverythingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EverythingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
