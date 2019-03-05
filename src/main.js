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


//Styling
import Color from './lib/color';





const camera = new Camera({ x: 0, y: 0, z: -1 })
const scene = new Scene({ background: 0x222222 })
const renderer = new Renderer()

// Add the renderers dom element to a container
document.querySelector('#container').appendChild(renderer.dom)


const grid = new Grid({ rows: 21, columns: 21, width: 600, height: 600 })
const rectangle = new Rectangle({ x:0, y:0, width: 10, height: 10})

rectangle.position = grid.getPositionAt({row: 10, column: 10})


console.log(rectangle)


// add the ellipse to the scene (for rendering)
scene.add( rectangle )
scene.add( grid )


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
