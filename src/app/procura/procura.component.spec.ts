import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcuraComponent } from './procura.component';

describe('ProcuraComponent', () => {
  let component: ProcuraComponent;
  let fixture: ComponentFixture<ProcuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcuraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
