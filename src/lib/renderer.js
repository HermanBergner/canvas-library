import Color from './color'
import { Vector } from '../library';
export default class Renderer {
  constructor(context) {
    this.ctx = context
    const { width, height } = context.canvas
    const half_width = width * .5
    const half_height = height * .5
    this.ctx.translate(width * .5, height * .5)
    this.options = { width, height, half_width, half_height }
  }

  render(elements, camera) {
    const { ctx } = this
    const { width, height, half_width, half_height } = this.options

    
    ctx.fillStyle = '#000'
    ctx.fillRect(-width, -height, width * 2, width * 2)

    for (let element of elements) {

      const { texture, options } = element
      const { zoom } = camera
      const { type } = options
      const { position } = options

    

      if (type === 'ellipse') {
        
        //add to options later
        const rotation = 0
        const TAU = Math.PI * 2

        
        const temp = new Vector(0,0).sub(position)
        
        const { rx, ry } = options
        const { x, y } = position.copy().sub(camera.position)
        ctx.save()
        ctx.fillStyle = texture.fill
        ctx.strokeStyle = texture.fill
        ctx.beginPath();
        ctx.arc(x, y, rx, TAU, false);



        ctx.fill();
        ctx.stroke();
        ctx.restore()
      }else if(type === 'rectangle'){

      }
    }

  }
}