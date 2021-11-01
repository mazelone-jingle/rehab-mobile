import { TestBed } from '@angular/core/testing';

import { WatchCommandService } from './watch-command.service';

describe('WatchCommandService', () => {
  let service: WatchCommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchCommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
