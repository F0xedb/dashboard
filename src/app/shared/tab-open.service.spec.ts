import { TestBed, inject } from '@angular/core/testing';

import { TabOpenService } from './tab-open.service';

describe('TabOpenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabOpenService]
    });
  });

  it('should be created', inject([TabOpenService], (service: TabOpenService) => {
    expect(service).toBeTruthy();
  }));
});
