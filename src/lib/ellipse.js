import Texture from "./texture";
import Vector from "./vector";

const { PI } = Math
const TAU = 2 * PI

export default class Ellipse{
  constructor(opt, texture){

    if(opt instanceof Texture){
      texture = opt
      opt = {}
    }
    

    const options = {
      x: 0, 
      y: 0, 
      r: 10,
      rotation: 0,
      start: 0,
      end: TAU,
      clockwise: true
    }

    Object.assign(options, opt)

    'radius' in options && ( options.r = options.radius )
    'rx' in options && 'ry' in options &&( options.r = options.radius )

    const { x, y, rx, ry, r, rotation, start, end, clockwise } = options

    this._options = { 
      position: new Vector(x, y),
      rx: rx ? rx : r,
      ry: ry ? ry : r,
      rotation, 
      texture: texture ? texture : Texture.Default(),
      start, 
      end,
      clockwise
    }
  }

  get position(){
    const { position } = this._options
    return position
  }

  get x(){
    const { x } = this._options.position
    return x
  }

  get y(){
    const { y } = this._options.position
    return y
  }

  get rx(){
    const { rx } = this._options
    return rx
  }

  get ry(){
    const { ry } = this._options
    return ry
  }

  get rotation(){
    const { rotation } = this._options
    return rotation
  }

  get texture(){
    const { texture } = this._options
    return texture
  }

  set position(position){
    this._options.position = position
    return this
  }

  set x(x){
    this._options.position.x = x
    return this
  }

  set y(y){
    this._options.position.y = y
    return this
  }

  set rx(rx){
    this._options.rx = rx
    return this
  }

  set ry(ry){
    this._options.ry = ry
    return this
  }

  set r(r){
    this._options.rx = r
    this._options.ry = r
    return this
  }

  set radius(radius){
    this._options.rx = radius
    this._options.ry = radius
    return this
  }

  set rotation(rotation){
    this._options.rotation = rotation
    return this
  }

  set texture(texture){
    this._options.texture = texture
    return this
  }
}