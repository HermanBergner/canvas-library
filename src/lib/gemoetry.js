import Texture from "./texture";
import { Vector } from "./vector";

export default class Gemometry{

  constructor(type, texture){
    this.texture = texture || Texture.Default()
    this.options = type
  }

  static Ellipse(x = 0, y = 0, rx = 5, ry = null){
      return {
        type: 'ellipse',
        position: new Vector(x, y),
        rx,
        ry: ry ? ry : rx
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