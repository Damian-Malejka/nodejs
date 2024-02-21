import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzczegolComponent } from './szczegol.component';

describe('SzczegolComponent', () => {
  let component: SzczegolComponent;
  let fixture: ComponentFixture<SzczegolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SzczegolComponent]
    });
    fixture = TestBed.createComponent(SzczegolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
