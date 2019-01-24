import Texture from "./texture";
import Vector from "./vector";

export default class Gemometry{

  constructor(type, texture, opt){
    this.texture = texture || Texture.Default()
    this.options = Object.assign(type, opt)
  }

  static Ellipse(x = 0, y = 0, rx = 5, ry = null){
      return {
        type: 'ellipse',
        position: new Vector(x, y),
        rx,
        ry: ry ? ry : rx
      }
  }

  static Rectangle(x = 0, y = 0, width = 20, height = 20){
    return {
      type: 'rectangle',
      position: new Vector(x, y),
      width,
      height,
      mode: 'center'
    }
}

  get position(){
    const { position } = this.options
    return position
  }

  set position(position){
    this.options.position = position
    return this
  }
}