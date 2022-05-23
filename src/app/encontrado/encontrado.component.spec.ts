import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncontradoComponent } from './encontrado.component';

describe('EncontradoComponent', () => {
  let component: EncontradoComponent;
  let fixture: ComponentFixture<EncontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncontradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
