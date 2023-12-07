import { TestBed } from '@angular/core/testing';

import { ChannelServiceService } from './channel-service.service';

describe('ChannelServiceService', () => {
  let service: ChannelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChannelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
