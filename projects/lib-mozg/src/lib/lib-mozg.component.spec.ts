import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibMozgComponent } from './lib-mozg.component';

describe('LibMozgComponent', () => {
  let component: LibMozgComponent;
  let fixture: ComponentFixture<LibMozgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibMozgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibMozgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
