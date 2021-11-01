import { TestBed } from '@angular/core/testing';

import { RealTimeExerciseService } from './real-time-exercise.service';

describe('RealTimeExerciseService', () => {
  let service: RealTimeExerciseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealTimeExerciseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
