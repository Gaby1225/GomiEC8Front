import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoespedidoComponent } from './informacoespedido.component';

describe('InformacoespedidoComponent', () => {
  let component: InformacoespedidoComponent;
  let fixture: ComponentFixture<InformacoespedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacoespedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacoespedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
