import Camera from "./camera"
import Gemoetry from "./gemoetry"
import Renderer from "./renderer"
import { Vector } from "../library";


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

    canvas.width = width || parentEl.offsetWidth
    canvas.height = height || parentEl.offsetHeight

    ctx = canvas.getContext('2d')
    this.elements = []
    this.cameras = []
    this.renderer = new Renderer(ctx)
    this.events = {}

    const { events } = this

    canvas.addEventListener('mousemove', e => {
      const rect = canvas.getBoundingClientRect();
      const scroll_x = canvas.scrollWidth / width;
      const scroll_y = canvas.scrollHeight / height;
      const x = (e.clientX - rect.left) / scroll_x;
      const y = (e.clientY - rect.top) / scroll_y;
      'mousemove' in events && events['mousemove'](new Vector(x - width * .5, y - height * .5))
    });

    window.addEventListener('keypress', e => 'keypress' in events && events['keypress'](e));
    canvas.addEventListener("mousewheel", e => {
      e.preventDefault()
      const delta =  Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      'scrollup' in events && events['scrollup'](delta)
    }, false)
  }

  add(...obj) {
    for (let o of obj) {
      if (o instanceof Camera) {
        this.cameras.push(o)
      }
      else if (o instanceof Gemoetry) {
        this.elements.push(o)
      }
    }
  }
  render() {
    const { cam } = this.options
    const camera = this.cameras[cam]
    const { elements, renderer } = this

    renderer.render(elements, camera)
  }

  on(event, fn) {
    this.events[event] = fn
  }

  get set() {
    
      const camera = (id) => {
        const { cameras } = this
        if (isNaN(id))
          return
        else if (id > cameras.length || id < 0)
          return
        else
          this.options.cam = id
      }

      return { camera:camera.bind(this) }
  }


}
