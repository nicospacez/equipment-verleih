import { TestBed, inject } from '@angular/core/testing';

import { VerleihService } from './verleih.service';

describe('VerleihService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerleihService]
    });
  });

  it('should be created', inject([VerleihService], (service: VerleihService) => {
    expect(service).toBeTruthy();
  }));
});
