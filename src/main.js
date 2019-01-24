import { Camera, Canvas, Geometry, Texture } from './library';

const texture = new Texture({ fill:'white' })

const camera1 = new Camera({x:0, y:0})
const camera2 = new Camera({x:100, y:- 150})

const canvas = new Canvas({width: 500, height:500})

const center = new Geometry(Geometry.Ellipse(150, 150, 20), texture)
const left = new Geometry(Geometry.Ellipse(100, 150, 20), texture)
const right = new Geometry(Geometry.Ellipse(200, 150, 20), texture)
const top = new Geometry(Geometry.Ellipse(150, 100, 20), texture)
const bottom = new Geometry(Geometry.Ellipse(150, 200, 20), texture)


const a = new Geometry(Geometry.Ellipse(-150, -200, 90), texture)

canvas.add( camera1, camera2 )
canvas.add(center, left, right, top, bottom, a)

canvas.on('keypress',    (e) => {
  if(e.key === '1')
    canvas.set.camera(0)
  if(e.key === '2')
    canvas.set.camera(1)
})

canvas.on('scrollup',    (e) => {camera1.zoom += 0.1})


const update = () => {
  requestAnimationFrame(update)
  
  canvas.render()  
}

update()



