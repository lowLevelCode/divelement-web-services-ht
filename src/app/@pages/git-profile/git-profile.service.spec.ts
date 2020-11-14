import { TestBed } from '@angular/core/testing';

import { GitProfileService } from './git-profile.service';

describe('GitProfileService', () => {
  let service: GitProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
