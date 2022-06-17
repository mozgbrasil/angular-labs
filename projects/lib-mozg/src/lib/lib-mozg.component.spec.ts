import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MozgLibComponent } from './lib-mozg.component';

describe('MozgLibComponent', () => {
  let component: MozgLibComponent;
  let fixture: ComponentFixture<MozgLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MozgLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MozgLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
