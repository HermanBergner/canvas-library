import Vector from "./vector";
import Ellipse from "./ellipse";
import Rectangle from "./rectangle";
import Grid from './grid'
import Sensor from "./sensor";


import renderEllipse from './renderers/ellipse'
import renderRectangle from './renderers/rectangle'
import renderGrid from './renderers/grid'

const { PI } = Math
const TAU = 2 * PI




export default class Renderer {
  constructor() {

    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    canvas.style.position = 'absolute';

    this.canvas = canvas
    this.context = context
    this.events = []
  }


  render(scene, camera) {

    const { canvas, context } = this

    canvas.width = canvas.parentElement.offsetWidth
    canvas.height = canvas.parentElement.offsetHeight

    //Clear the screen
    context.fillStyle = scene.texture.fillRGBA()
    context.rect(0, 0, canvas.width, canvas.height)
    context.fill()

    //Find the center of the screen
    const center = new Vector(canvas.width / 2, canvas.height / 2)


    // Get the translation point and zoom of the camera
    const cameraCopy = camera.position.copy()
    const zoom = Math.pow(1.2, cameraCopy.z)
    const translate = cameraCopy.add(center)



    // Apply translation and zoom
    context.translate(translate.x, translate.y)
    context.scale(zoom, zoom)

    for (let entity of scene.entities) {

      context.save()

      if (entity instanceof Ellipse) {
        renderEllipse(entity, context)
      } else if (entity instanceof Rectangle) {
        renderRectangle(entity, context)
      } else if (entity instanceof Grid) {
        renderGrid(entity, context)
      }else if(entity instanceof Sensor){
        const { rectangle, ellipse } = entity
        renderEllipse(ellipse, context)
        renderRectangle(rectangle, context)
      }


      context.restore()
    }
    // get all elements in scene
    // sort them by order?
    // clear the canvas?
    // translate to camera position
    // render element based on type

  }

  get dom() {
    return this.canvas
  }

  event(e) {
    this.event.push(e)
  }


  on() {

    const event = (() => { }).bind(this)

    return { event }
  }
}