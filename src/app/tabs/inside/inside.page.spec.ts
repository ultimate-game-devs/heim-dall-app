import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsidePage } from './inside.page';

describe('Tab1Page', () => {
  let component: InsidePage;
  let fixture: ComponentFixture<InsidePage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(InsidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
