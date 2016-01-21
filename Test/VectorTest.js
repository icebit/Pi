var assert = require('assert');
var Vec2 = require("../Engine/Math/Vector").Vec2;
describe("Vec2()", function(){
  describe("GetLength()", function(){
    it("Should return 1.41421356 for x = 1, y = 1 rounded to eight decimals", function(){
      var vec = new Vec2(1, 1);
      assert.equal(Math.floor(vec.GetLength() * 100000000), 141421356);
    });
  });
  describe("GetLengthSquared()", function(){
    it("Should return 2 for x = 1, y = 1", function(){
      var vec = new Vec2(1, 1);
      assert.equal(vec.GetLengthSquared(), 2);
    });
  });
});
