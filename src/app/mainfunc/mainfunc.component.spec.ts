import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainfuncComponent } from './mainfunc.component';

describe('MainfuncComponent', () => {
  let component: MainfuncComponent;
  let fixture: ComponentFixture<MainfuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainfuncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainfuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
