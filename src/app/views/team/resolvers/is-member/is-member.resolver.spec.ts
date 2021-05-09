import { TestBed } from '@angular/core/testing';

import { IsMemberResolver } from './is-member.resolver';

describe('IsMemberResolver', () => {
  let resolver: IsMemberResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(IsMemberResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
