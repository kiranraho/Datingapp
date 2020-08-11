/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MongoComponent } from './Mongo.component';

describe('MongoComponent', () => {
  let component: MongoComponent;
  let fixture: ComponentFixture<MongoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MongoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
