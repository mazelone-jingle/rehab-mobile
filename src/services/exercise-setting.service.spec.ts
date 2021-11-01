import { TestBed } from '@angular/core/testing';

import { ExerciseSettingService } from './exercise-setting.service';

describe('ExerciseSettingService', () => {
  let service: ExerciseSettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseSettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
