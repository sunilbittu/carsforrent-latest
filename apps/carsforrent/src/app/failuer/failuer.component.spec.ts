import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailuerComponent } from './failuer.component';

describe('FailuerComponent', () => {
  let component: FailuerComponent;
  let fixture: ComponentFixture<FailuerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailuerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
