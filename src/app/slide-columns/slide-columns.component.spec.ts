import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideColumnsComponent } from './slide-columns.component';

describe('SlideColumnsComponent', () => {
  let component: SlideColumnsComponent;
  let fixture: ComponentFixture<SlideColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideColumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
