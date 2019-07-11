import { TestBed } from '@angular/core/testing';

import { ChatDimensionService } from './chat-dimension.service';

describe('ChatDimensionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatDimensionService = TestBed.get(ChatDimensionService);
    expect(service).toBeTruthy();
  });
});
