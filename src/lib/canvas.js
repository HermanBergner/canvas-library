import Camera from "./camera"
import Gemoetry from "./gemoetry"
import Renderer from "./renderer"


export default class Canvas {

  constructor(opt) {
    this.options = Object.assign({
      width: null,
      height: null,
      parent: 'body',
      el: null,
      cam: 0
    }, opt)

    let canvas, ctx;
    const { width, height, parent, el } = this.options
    const parentEl = document.querySelector(parent)

    if (el) {
      canvas = document.querySelector('el') || console.warn(`selector: ${el} was not found`)
    } else {
      canvas = document.createElement('canvas')
      parentEl.appendChild(canvas)
    }

    canvas.width  = width  || parentEl.offsetWidth
    canvas.height = height || parentEl.offsetHeight

    ctx = canvas.getContext('2d')
    this.elements = []
    this.cameras = []
    this.renderer = new Renderer(ctx)
  }

  add(obj) {
    if (obj instanceof Camera) {
      this.cameras.push(obj)
    }
    else if (obj instanceof Gemoetry) {
      this.elements.push(obj)
    }
  }
  render(){
    const { cam }       = this.options
    const camera        = this.cameras[cam]
    const { elements }  = this
    for(let element of elements){
      this.renderer.render(element, camera)
    }  
  }
}
