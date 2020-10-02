/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MemerDetailedComponent } from './memer-detailed.component';

describe('MemerDetailedComponent', () => {
  let component: MemerDetailedComponent;
  let fixture: ComponentFixture<MemerDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemerDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemerDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
