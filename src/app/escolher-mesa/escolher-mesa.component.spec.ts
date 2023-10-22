import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolherMesaComponent } from './escolher-mesa.component';

describe('EscolherMesaComponent', () => {
  let component: EscolherMesaComponent;
  let fixture: ComponentFixture<EscolherMesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscolherMesaComponent]
    });
    fixture = TestBed.createComponent(EscolherMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
