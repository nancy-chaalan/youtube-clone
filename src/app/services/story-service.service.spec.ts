import { TestBed } from '@angular/core/testing';

import { StoryServiceService } from './story-service.service';

describe('StoryServiceService', () => {
  let service: StoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
