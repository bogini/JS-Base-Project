import { expect } from 'chai';

import sort from './sort';

describe('sort test', () => {
  it('sorts empty array', () => {
    expect(sort([])).to.eql([]);
  });

  it('sorts sorted array', () => {
    expect(sort([1, 2, 3])).to.eql([1, 2, 3]);
  });

  it('sorts unsorted array', () => {
    expect(sort([2, 1, 3])).to.eql([1, 2, 3]);
  });
});
