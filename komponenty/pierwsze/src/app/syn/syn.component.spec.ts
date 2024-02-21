import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynComponent } from './syn.component';

describe('SynComponent', () => {
  let component: SynComponent;
  let fixture: ComponentFixture<SynComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SynComponent]
    });
    fixture = TestBed.createComponent(SynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
