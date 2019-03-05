const grid = (grid, context) => {

  const width = (grid.width ? grid.width : canvas.width) / 2
  const height = (grid.height ? grid.height : canvas.height) / 2

  const spaceY = height * 2 / grid.rows
  const spaceX = width * 2 / grid.columns




  for (let highlight of grid.highlights) {
    context.save()
    
    let { x, y, texture } = highlight
    context.fillStyle = texture.fillRGBA()
    context.fillRect(
      (-spaceX * grid.columns / 2) + spaceX * x,
      (-spaceY * grid.rows / 2) + spaceY * y,
      spaceX, spaceY)
    context.restore()
  }




  context.strokeStyle = "#fff"

  for (let row = 0; row < grid.rows + 1; row++) {



    context.beginPath()
    context.moveTo(-width, -height + spaceY * row)
    context.lineTo(width, -height + spaceY * row)
    context.stroke()
  }

  for (let column = 0; column < grid.columns + 1; column++) {
    context.beginPath()
    context.moveTo(-width + spaceX * column, -height)
    context.lineTo(-width + spaceX * column, height)
    context.stroke()
  }

}

export default grid