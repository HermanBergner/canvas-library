import Vector from './vector'
export default class Camera{
  constructor(opt){

    this.options = Object.assign({
      background: 0x000,
      x: 0,
      y: 0,
      zoom: 1
    }, opt)

    const { x, y }  = this.options
    this.position = new Vector(x, y)
  }

  get zoom(){
    const { zoom } = this.options
    return zoom
  }


  set zoom(zoom){
    this.options.zoom = zoom
    return this
  }
}