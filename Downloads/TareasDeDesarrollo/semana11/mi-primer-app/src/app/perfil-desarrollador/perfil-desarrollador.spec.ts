import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDesarrollador } from './perfil-desarrollador';

describe('PerfilDesarrollador', () => {
  let component: PerfilDesarrollador;
  let fixture: ComponentFixture<PerfilDesarrollador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilDesarrollador],
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilDesarrollador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
