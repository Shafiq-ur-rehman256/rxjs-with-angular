import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangComponent } from './rang.component';

describe('RangComponent', () => {
  let component: RangComponent;
  let fixture: ComponentFixture<RangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RangComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
