import { TestBed } from '@angular/core/testing';

import { ChoixclientService } from './choixclient.service';

describe('ChoixclientService', () => {
  let service: ChoixclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChoixclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
