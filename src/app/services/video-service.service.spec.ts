import { TestBed } from '@angular/core/testing';

import { VideoServiceService } from './video-service.service';

describe('VideoServiceService', () => {
  let service: VideoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
