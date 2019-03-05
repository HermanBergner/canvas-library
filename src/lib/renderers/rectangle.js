const rectangle = (rectangle, context) => {

  const { width, height, texture, drawFrom } = rectangle
  let { x, y, } = rectangle

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
}

export default rectangle