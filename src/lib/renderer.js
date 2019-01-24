import Color from './color'
export default class Renderer {
  constructor(context) {
    this.ctx = context
    const { width, height } = context.canvas
    const half_width = width * .5
    const half_height = height * .5
    this.ctx.translate(width * .5, height * .5)

    this.options = { width, height, half_width, half_height }
  }

  render(element, camera) {
    const { ctx } = this
    const { texture, options } = element
    const { type } = options
    const { width, height, half_width, half_height } = this.options
    
    ctx.fillStyle = '#000'
    ctx.fillRect(-width, -height, width * 2, width * 2)

    if (type === 'ellipse') {

      //add to options later
      const rotation = 0
      const TAU = Math.PI * 2
      const { x, y } = options.position
      const { rx, ry } = options

      

      ctx.fillStyle   = texture.fill
      ctx.strokeStyle = texture.fill
      ctx.beginPath();
      ctx.arc(x, y, ry, TAU, false);
      ctx.fill();
      ctx.stroke();
    }

  }
}