import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaDeTrabajoComponent } from './experiencia-de-trabajo.component';

describe('ExperienciaDeTrabajoComponent', () => {
  let component: ExperienciaDeTrabajoComponent;
  let fixture: ComponentFixture<ExperienciaDeTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaDeTrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaDeTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
