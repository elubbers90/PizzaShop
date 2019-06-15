import { TestBed } from '@angular/core/testing';

import { PizzaDataService } from './pizza-data.service';

describe('PizzaDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PizzaDataService = TestBed.get(PizzaDataService);
    expect(service).toBeTruthy();
  });
});
