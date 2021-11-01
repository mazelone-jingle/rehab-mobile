import { TestBed } from '@angular/core/testing';

import { ExerciseRecordsService } from './exercise-records.service';

describe('ExerciseRecordsService', () => {
  let service: ExerciseRecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseRecordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
