import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColetacanceladaComponent } from './coletacancelada.component';

describe('ColetacanceladaComponent', () => {
  let component: ColetacanceladaComponent;
  let fixture: ComponentFixture<ColetacanceladaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColetacanceladaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColetacanceladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
