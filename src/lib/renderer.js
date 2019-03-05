import Vector from "./vector";
import Ellipse from "./ellipse";
import Rectangle from "./rectangle";
import Grid from './grid'

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

        const { x, y, rx, ry, rotation, texture } = entity
        context.beginPath()
        context.ellipse(x, y, rx, ry, rotation, 0, TAU, false)

        if (texture.fill) {
          context.fillStyle = texture.fillRGBA()
          context.fill()
        }

        if (texture.stroke) {
          context.lineWidth = texture.strokeWeight
          context.strokeStyle = texture.strokeRGBA()
          context.stroke()
        }
      } else if (entity instanceof Rectangle) {

        const { width, height, texture, drawFrom } = entity
        let { x, y, } = entity

        if (drawFrom === 'center') {
          x -= width / 2
          y -= width / 2
        } else if (drawFrom === 'top-right') {
          x -= width
        } else if (drawFrom === 'bottom-right') {
          x -= width
          y -= height
        } else if (drawFrom === 'bottom-left') {
          y -= height
        }

        context.beginPath()
        context.rect(x, y, width, height)

        if (texture.fill) {
          context.fillStyle = texture.fillRGBA()
          context.fill()
        }

        if (texture.stroke) {
          context.lineWidth = texture.strokeWeight
          context.strokeStyle = texture.strokeRGBA()
          context.stroke()
        }
      } else if (entity instanceof Grid) {

        const width = (entity.width ? entity.width : canvas.width) / 2
        const height = (entity.height ? entity.height : canvas.height) / 2

        const spaceY = height * 2 / entity.rows
        const spaceX = width * 2 / entity.columns




        for (let highlight of entity.highlights) {
          context.save()
          
          let { x, y, texture } = highlight
          context.fillStyle = texture.fillRGBA()
          context.fillRect(
            (-spaceX * entity.columns / 2) + spaceX * x,
            (-spaceY * entity.rows / 2) + spaceY * y,
            spaceX, spaceY)
          context.restore()
        }




        context.strokeStyle = "#fff"

        for (let row = 0; row < entity.rows + 1; row++) {



          context.beginPath()
          context.moveTo(-width, -height + spaceY * row)
          context.lineTo(width, -height + spaceY * row)
          context.stroke()
        }

        for (let column = 0; column < entity.columns + 1; column++) {
          context.beginPath()
          context.moveTo(-width + spaceX * column, -height)
          context.lineTo(-width + spaceX * column, height)
          context.stroke()
        }


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