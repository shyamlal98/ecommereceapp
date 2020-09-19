import { TestBed } from '@angular/core/testing';

import { ProdutctDataService } from './produtct-data.service';

describe('ProdutctDataService', () => {
  let service: ProdutctDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutctDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
