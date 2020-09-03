import { TestBed } from '@angular/core/testing';

import { ImenikService } from './imenik.service';

describe('ImenikService', () => {
  let service: ImenikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImenikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
