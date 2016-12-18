/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestRunnerService } from './test-runner.service';

describe('TestRunnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestRunnerService]
    });
  });

  it('should ...', inject([TestRunnerService], (service: TestRunnerService) => {
    expect(service).toBeTruthy();
  }));
});
