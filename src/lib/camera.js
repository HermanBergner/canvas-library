import Vector from './vector'
import Texture from './texture'

export default class Camera{
  constructor({ x = 0, y = 0, z = -1 }){

    this.position = new Vector( x, y, z )
  }

  follow(){}
  lookAt(){}
  zero(){}
}