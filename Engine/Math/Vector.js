exports.Vec2 = function(x, y){
  this.x = x;
  this.y = y;
  this.GetLength = function(){
    return Math.sqrt(x*x + y*y);
  };
  this.GetLengthSquared = function(){
    return x*x + y*y;
  };
}
