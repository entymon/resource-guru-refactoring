import assert from "assert";
import tree from "../src/index.js";

describe('Tree', function() {
  it('should return correct string value', function() {
    assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
  });

  it('should return correct calculated result', function() {
    assert.strictEqual(2, tree.result());
  });
});