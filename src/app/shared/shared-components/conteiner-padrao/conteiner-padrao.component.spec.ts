import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteinerPadraoComponent } from './conteiner-padrao.component';

describe('ConteinerPadraoComponent', () => {
  let component: ConteinerPadraoComponent;
  let fixture: ComponentFixture<ConteinerPadraoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConteinerPadraoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteinerPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
