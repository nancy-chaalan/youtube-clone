import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarToggleBtnComponent } from './sidebar-toggle-btn.component';

describe('SidebarToggleBtnComponent', () => {
  let component: SidebarToggleBtnComponent;
  let fixture: ComponentFixture<SidebarToggleBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarToggleBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarToggleBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
