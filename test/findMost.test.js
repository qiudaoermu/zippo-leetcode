import assert from "assert";
import findMost from "../package/findMost";
;
describe("findMost", () => {

  it("should return the sum up", () => {
    const array = ["a", "b", "a", "c"];
    assert.strictEqual(findMost(array), "aa");
  });

});
