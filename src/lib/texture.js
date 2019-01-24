export default class Texture{
  constructor(opt){
    this.options = Object.assign({
      fill : "#fff",
      stroke : null,
      wireframe : false
    })
  }

  static Default(){
    return new Texture()
  }

  get fill(){
    const { fill } = this.options
    return fill
  }
  
  get stroke(){
    const { stroke } = this.options
    return stroke
  }
}