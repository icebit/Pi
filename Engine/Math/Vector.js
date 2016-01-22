module.exports = function(x, y){
  this.x = x;
  this.y = y;
  
  this.Add = function(other){
    return module.exports(this.x + other.x, this.y + other.y);
  };
  
  this.GetLength = function(){
    return Math.sqrt(x*x + y*y);
  };
  this.GetLengthSquared = function(){
    return x*x + y*y;
  };
}
