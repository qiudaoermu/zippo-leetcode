import assert from 'assert'
import reduceAdd from '../reduceAdd'

describe('reduceAdd', () => {

  it("should return the sum up", () => {
    const array = [1, 2, 3, 4, 5]
    assert.strictEqual(reduceAdd(array), 15)
  });
  it('should return the sum up', () => {
    const array = [10, 20, 30, 40, 50]
    assert.strictEqual(reduceAdd(array), 150)
  });
})
