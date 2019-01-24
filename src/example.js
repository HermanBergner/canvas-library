import { Camera, Canvas, Geometry, Texture } from './library';

const texture = new Texture({ fill:'white' })

const camera = new Camera()
const canvas = new Canvas({width: 500, height:500})
const ellipse = new Geometry(Geometry.Ellipse(10, 10, 20), texture)

canvas.add( camera )
canvas.add( ellipse )

const update = () => {

  requestAnimationFrame(update)
  ellipse.position.add(0.1)
  canvas.render()  
}

update()




