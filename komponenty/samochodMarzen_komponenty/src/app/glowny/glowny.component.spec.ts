import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlownyComponent } from './glowny.component';

describe('GlownyComponent', () => {
  let component: GlownyComponent;
  let fixture: ComponentFixture<GlownyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlownyComponent]
    });
    fixture = TestBed.createComponent(GlownyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
