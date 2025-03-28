import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsidePage } from './outside.page';

describe('Tab1Page', () => {
  let component: OutsidePage;
  let fixture: ComponentFixture<OutsidePage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(OutsidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
