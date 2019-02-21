import { add } from '../src/';

describe('add', () =>
{
  it('returns 3', () =>
  {
    expect(add(1, 2)).toBe(3);
  });
});