export class Vector{
  constructor(x = 0, y = 0, z = 0){
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }

  copy(){
    const { x, y, z} = this;
    return new Vector(x, y, z);
  }

  add(x = 0, y = x, z = x){
    if(x instanceof Vector)
      return this.add(x.x, x.y, x.z);
    this.x += x;
    this.y += y;
    this.z += z;
    return this;
  }

  static add(a, b){
    const x = a.x + b.x;
    const y = a.y + b.y;
    const z = a.z + b.z;
    return new Vector(x, y, z);
  }

  sub(x = 0, y = x, z = x){
    if(x instanceof Vector)
      return this.add(x.x, x.y, x.z);
    this.x -= x;
    this.y -= y;
    this.z -= z;
    return this;
  }

  static sub(a, b){
    const x = a.x - b.x;
    const y = a.y - b.y;
    const z = a.z - b.z;
    return new Vector(x, y, z);
  }

  mult(x = 1, y = x, z = x){
    if(x instanceof Vector)
      return this.add(x.x, x.y, x.z);
    this.x *= x;
    this.y *= y;
    this.z *= z;
    return this;
  }

  div(x = 1, y = x, z = x){
    if(x instanceof Vector)
      return this.add(x.x, x.y, x.z);
    this.x /= x;
    this.y /= y;
    this.z /= z;
    return this;
  }

  static div(a, b){
    const x = a.x / b.x;
    const y = a.y / b.y;
    const z = a.z / b.z;
    return new Vector(x, y, z);
  }

  normalize(){
    return this.div(this.mag());
  }

  mag(){
    const { x, y, z } = this;
    return sqrt((x * x) + (y * y) + (z * z));
  }

  setMag(mag){
    this.normalize().mult(mag);
    return this;
  }

  randomize(min = -1, max = 1){
    this.x = random(min, max);
    this.y = random(min, max);
    this.z = random(min, max);  
    return this;
  }

  set(x = 0, y = 0, z = 0){
    if(x instanceof Vector)
      return this.set(x.x, x.y, x.z)
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }

  dist(x, y, z){
    if(x instanceof Vector)
      return this.dist(x.x, x.y, x.z)
    return dist(this.x, this.y, this.z, x, y, z);
  }

  heading(){
    const { x, y }      = this;
    const { center, angleMode }  = canvasOptions;
    let heading = atan2(y, x)   
    return angleMode === DEGREES ? radiansToDegrees(heading) : heading   
  }

  limit(x = 1, y = x, z = x){
    if(x instanceof Vector)
      return this.limit(x.x, x.y, x.z)
    this.x = this.x > x ? x : this.x
    this.y = this.y > y ? y : this.y
    this.z = this.z > z ? z : this.z
    return this;
  }
}