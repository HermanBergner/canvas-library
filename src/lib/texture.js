import Color from './color'

export default class Texture{
  constructor(opt){
    this.options = Object.assign({
      fill : undefined,
      stroke : undefined,
      strokeWeight: 1
    }, opt)

    const { fill, stroke } = this.options
    this.fill   = new Color(fill)
    this.stroke = new Color(stroke)
  }

  static Default(){
    return new Texture({fill:'#fff'})
  }

  get fill(){
    const { fill } = this.options
    return 'r' in fill ? fill : undefined
  }
  get stroke(){
    const { stroke } = this.options
    return 'r' in stroke ? stroke : undefined
  }

  set fill(fill){
    this.options.fill = fill
  }
  set stroke(stroke){
    this.options.stroke = stroke
  }

  get strokeWeight(){
    const { strokeWeight } = this.options
    return strokeWeight
  }

  set strokeWeight(weight){
    this.options.strokeWeight = strokeWeight
  }

  fillRGBA(){
    const { r, g, b, a } = this.fill
    return `rgba(${r}, ${g}, ${b}, ${a})`
  }

  strokeRGBA(){
    const { r, g, b, a } = this.stroke
    return `rgba(${r}, ${g}, ${b}, ${a})`
  }
}