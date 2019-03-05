const random = (min = 0, max = 0) => {
  if (min > max)
    return random(max, min);
  if (min === 0 && max === 0)
    return random(0, 1);
  return Math.random() * (max - min) + min;
}


import '../style/main.sass'

import Vector from './lib/vector'
import Renderer from './lib/renderer'
import Camera from './lib/camera'
import Scene from './lib/scene'
import Texture from './lib/texture'
import Ellipse from './lib/ellipse'
import Rectangle from './lib/rectangle'
import Grid from './lib/grid';
import Sensor from './lib/sensor';

//Styling
import Color from './lib/color';






const camera = new Camera({ x: 0, y: 0, z: -1 })
const scene = new Scene({ background: 0x222222 })
const renderer = new Renderer()

// Add the renderers dom element to a container
document.querySelector('#container').appendChild(renderer.dom)

const rectangle = new Rectangle({ x:0, y:0, width: 10, height: 10})
const grid = new Grid({ rows: 200, columns: 200, width: 6000, height: 6000 })


const sensor = new Sensor({ x: 0, y: 0, radius: 2000, width: 100, height:100 })

// add the ellipse to the scene (for rendering)

scene.add( grid )
scene.add( sensor )

let b = grid.highlight(0, 10)


const update = () => {
  requestAnimationFrame(update)

  //b.x = ++b.x % 200
  //Render the scene
  renderer.render(scene, camera)
}

//start the update loop
update()



renderer.dom.addEventListener('mousewheel', e => {
  e.preventDefault()


  let x = (e.offsetX || (e.pageX - renderer.dom.offsetLeft))
  let y = (e.offsetY || (e.pageY - renderer.dom.offsetTop))
  const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

  camera.position.z += delta * 0.2
})
