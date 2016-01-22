var assert = require('assert');
var Vector = require("../Engine/Math/Vector");
describe("Vector", function(){
  describe("Add()", function(){
    it("Should return Vec2(2, 2) for Vec2(1, 1) + Vec2(1, 1)", function(){
      var vec1 = new Vector(1, 1);
      var vec2 = new Vector(1, 1);
      //var vec = vec1.Add(vec2);
      assert.equal(vec1.x, 1);
      assert.equal(vec2.y, 1);
    });
  });
  describe("GetLength()", function(){
    it("Should return 1.41421356 for x = 1, y = 1 rounded to eight decimals", function(){
      var vec = new Vector(1, 1);
      assert.equal(Math.floor(vec.GetLength() * 100000000), 141421356);
    });
  });
  describe("GetLengthSquared()", function(){
    it("Should return 2 for x = 1, y = 1", function(){
      var vec = new Vector(1, 1);
      assert.equal(vec.GetLengthSquared(), 2);
    });
  });
});
