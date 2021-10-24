import { TestBed } from '@angular/core/testing';

import { QuestionSetService } from './question-set.service';

describe('QuestionSetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionSetService = TestBed.get(QuestionSetService);
    expect(service).toBeTruthy();
  });
});
