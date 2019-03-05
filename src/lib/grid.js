import Texture from './texture'

export default class Grid{
  constructor(opts){

    this.options = Object.assign({
      rows: 10, 
      columns:10,
      width: undefined, 
      height: undefined,
      highlights: []
    }, opts)

    
  }

  get rows(){
    const { rows } = this.options
    return rows
  }

  get columns(){
    const { columns } = this.options
    return columns
  }

  get width(){
    const { width } = this.options
    return width
  }

  get height(){
    const { height } = this.options
    return height
  }

  highlight(x = 0, y = 0, texture = Texture.Default()){
    const index = this.options.highlights.push({ x, y, texture })
    return  this.options.highlights[index- 1]
  }

  get highlights(){
    const { highlights } = this.options
    return highlights
  }
}