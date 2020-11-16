import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicRepositoriesListComponent } from './public-repositories-list.component';

describe('PublicRepositoriesListComponent', () => {
  let component: PublicRepositoriesListComponent;
  let fixture: ComponentFixture<PublicRepositoriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicRepositoriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicRepositoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
