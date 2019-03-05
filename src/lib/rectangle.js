import Texture from "./texture";
import Vector from "./vector";

export default class Rectangle{
  constructor(opt, texture){

    const options = {
      x: 0, 
      y: 0, 
      width: 10,
      height: 10,
      drawFrom: 'center'
    }

    Object.assign(options, opt)



    const { x, y, width, height, drawFrom } = options

    this._options = { 
      position: new Vector(x, y),
      width,
      height,
      texture: texture ? texture : Texture.Default(),
      drawFrom
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

  get width(){
    const { width } = this._options
    return width
  }

  get height(){
    const { height } = this._options
    return height
  }

  get texture(){
    const { texture } = this._options
    return texture
  }

  get drawFrom(){
    const { drawFrom } = this._options
    return drawFrom
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

  set width(width){
    this._options.width = width
    return this
  }

  set height(height){
    this._options.height = height
    return this
  }

  set texture(texture){
    this._options.texture = texture
    return this
  }

  set drawFrom(from){
    this._options.drawFrom = from
    return this
  }
}