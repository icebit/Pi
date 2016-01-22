var assert = require('assert');
var Vector = require("../Engine/Math/Vector");

describe("Vector", function(){
  describe("Add()", function(){
    it("Should return Vec2(2, 2) for Vec2(1, 1) + Vec2(1, 1)", function(){
      var vec = new Vector(1, 1).Add(new Vector(1, 1));
      assert.equal(vec.x, new Vector(2, 2).x);
      assert.equal(vec.y, new Vector(2, 2).y);
    });
  });
  describe("Sub()", function(){
      it("Should return Vec2(0, 0) for Vec2(1, 1) - Vec2(1, 1)", function(){
        var vec = new Vector(1, 1).Sub(new Vector(1, 1));
        assert.equal(vec.x, new Vector(0, 0).x);
        assert.equal(vec.y, new Vector(0, 0).y);
      });
    });
  describe("GetLength()", function(){
    it("Should return 1.41421356 for x = 1, y = 1 rounded to eight decimal places", function(){
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
