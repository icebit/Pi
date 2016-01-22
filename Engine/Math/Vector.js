/*
Vector.js
Basic vector class
*/

module.exports = function(x, y){
  this.x = x;
  this.y = y;

  this.Add = function(other){
    return new module.exports(this.x + other.x, this.y + other.y);
  };

  this.Sub = function(other){
    return new module.exports(this.x - other.x, this.y - other.y);
  };

  this.GetLength = function(){
    return Math.sqrt(x*x + y*y);
  };
  this.GetLengthSquared = function(){
    return x*x + y*y;
  };
}
