import Texture from './texture'

export default class Scene{
  constructor({ background = 0x000000 }){
    this.texture = new Texture({ fill: background })
    this.entities = []
  }


  add(...entity){
    this.entities.push(...entity)
  } 
}