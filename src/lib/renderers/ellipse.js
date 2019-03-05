const { PI } = Math
const TAU = 2 * PI

const ellipse = (ellipse, context) => {
  const { x, y, rx, ry, rotation, texture } = ellipse
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
}

export default ellipse