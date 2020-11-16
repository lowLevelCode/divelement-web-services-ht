import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicActivityListComponent } from './public-activity-list.component';

describe('PublicActivityListComponent', () => {
  let component: PublicActivityListComponent;
  let fixture: ComponentFixture<PublicActivityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicActivityListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicActivityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
