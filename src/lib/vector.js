const { atan2, sqrt, pow } = Math

const dist = (...args) => {
  const { length } = args || 0
  if(length === 4){
    const [x1, y1, x2, y2] = args
    return sqrt( pow(x2 - x1, 2) + pow(y2 - y1, 2) );
  }else if(length === 6){
    const [x1, y1, z1, x2, y2, z2] = args
    return sqrt( pow(x2 - x1, 2) + pow(y2 - y1, 2) + pow(z2 - z1, 2) );
  }
}

class Vector{
  
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

  addX(x = 0){
    if(x instanceof Vector){
      this.x += x.x
      return this
    }
    this.x += x;
    return this;
  } 

  addY(y = 0){
    if(y instanceof Vector){
      this.y += y.y
      return this
    }
    this.y += y;
    return this;
  } 

  addZ(z = 0){
    if(z instanceof Vector){
      this.z += z.z
      return this
    }
    this.z += z;
    return this;
  }

  addXY(x = 0, y = 0){
    if(x instanceof Vector){
      this.x += x.x
      this.y += x.y
      return this
    }
    this.x += x;
    this.y += y;
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
      return this.sub(x.x, x.y, x.z);
    this.x -= x;
    this.y -= y;
    this.z -= z;
    return this;
  }

  subX(x = 0){
    if(x instanceof Vector){
      this.x -= x.x
      return this
    }
    this.x -= x;
    return this;
  } 

  subY(y = 0){
    if(y instanceof Vector){
      this.y -= y.y
      return this
    }
    this.y -= y;
    return this;
  } 

  subZ(z = 0){
    if(z instanceof Vector){
      this.z -= z.z
      return this
    }
    this.z -= z;
    return this;
  }

  subXY(x = 0, y = 0){
    if(x instanceof Vector){
      this.x -= x.x
      this.y -= x.y
      return this
    }
    this.x -= x;
    this.y -= y;
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
      return this.mult(x.x, x.y, x.z);
    this.x *= x;
    this.y *= y;
    this.z *= z;
    return this;
  }

  multX(x = 0){
    if(x instanceof Vector){
      this.x *= x.x
      return this
    }
    this.x *= x;
    return this;
  } 

  multY(y = 0){
    if(y instanceof Vector){
      this.y *= y.y
      return this
    }
    this.y *= y;
    return this;
  } 

  multZ(z = 0){
    if(z instanceof Vector){
      this.z *= z.z
      return this
    }
    this.z *= z;
    return this;
  }

  multXY(x = 0, y = 0){
    if(x instanceof Vector){
      this.x *= x.x
      this.y *= x.y
      return this
    }
    this.x *= x;
    this.y *= y;
    return this;
  }

  static mult(a, b){
    const x = a.x * b.x;
    const y = a.y * b.y;
    const z = a.z * b.z;
    return new Vector(x, y, z);
  }

  div(x = 1, y = x, z = x){
    if(x instanceof Vector)
      return this.div(x.x, x.y, x.z);
    this.x /= x;
    this.y /= y;
    this.z /= z;
    return this;
  }

  divX(x = 0){
    if(x instanceof Vector){
      this.x /= x.x
      return this
    }
    this.x /= x;
    return this;
  } 

  divY(y = 0){
    if(y instanceof Vector){
      this.y /= y.y
      return this
    }
    this.y /= y;
    return this;
  } 

  divZ(z = 0){
    if(z instanceof Vector){
      this.z /= z.z
      return this
    }
    this.z /= z;
    return this;
  }

  divXY(x = 0, y = 0){
    if(x instanceof Vector){
      this.x /= x.x
      this.y /= x.y
      return this
    }
    this.x /= x;
    this.y /= y;
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

  setX(x = 0){
    if(x instanceof Vector){
      this.x = x.x
      return this
    }
    this.x = x;
    return this;
  }

  setY(y = 0){
    if(y instanceof Vector){
      this.y = y.y
      return this
    }
    this.y = y;
    return this;
  }

  setY(z = 0){
    if(z instanceof Vector){
      this.z = z.z
      return this
    }
    this.z = z;
    return this;
  }

  setXY(x = 0, y = 0){
    if(x instanceof Vector){
      return this.set(x.x, x.y, this.z)
    }
    this.x = x;
    this.y = y;
    return this;
  }

  getXY(){ 
    return { x: this.x, y: this.y}
  }

  dist(x, y, z){
    if(x instanceof Vector)
      return this.dist(x.x, x.y, x.z)
    return dist(this.x, this.y, this.z, x, y, z);
  }

  heading(other){
    const copy = this.copy()
    copy.sub(other)
    const { x, y } = copy 
    return atan2(y, x)
  }

  limit(x = 1, y = x, z = x){
    if(x instanceof Vector)
      return this.limit(x.x, x.y, x.z)
    this.x = this.x > x ? x : this.x
    this.y = this.y > y ? y : this.y
    this.z = this.z > z ? z : this.z
    return this;
  }

  lerp(stop, amt = 0.5){
    const { x, y, z } = this
    this.x = x + amt * (stop.x - x)
    this.y = y + amt * (stop.y - y)
    this.y = y + amt * (stop.z - z)
    return this
  }
  
}