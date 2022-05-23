import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedInfoCardComponent } from './detailed-info-card.component';

describe('DetailedInfoCardComponent', () => {
  let component: DetailedInfoCardComponent;
  let fixture: ComponentFixture<DetailedInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedInfoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
