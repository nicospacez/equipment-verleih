import { TestBed, inject } from '@angular/core/testing';

import { ReservierungService } from './reservierung.service';

describe('ReservierungService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservierungService]
    });
  });

  it('should be created', inject([ReservierungService], (service: ReservierungService) => {
    expect(service).toBeTruthy();
  }));
});
