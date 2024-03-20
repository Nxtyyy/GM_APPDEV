import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Assignment1Page } from './assignment1.page';

describe('Assignment1Page', () => {
  let component: Assignment1Page;
  let fixture: ComponentFixture<Assignment1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Assignment1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
