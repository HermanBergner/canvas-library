# Overview of 2d rendering

## Camera
## Renderer
## Scene
## Material
## Grid

## Primitives?
  * Ellipse
  * Rectangle
  * Triangle
  * Grid?
## Vertex




```js

  const camera    = new Camera({ x:0, y:0, z: -1, zoom: true, drag: true })
  const scene     = new Scene({ background: 0xffffff })
  const renderer  = new Renderer()

  const ellipse   = new Ellipse( {x: 0, y: 0, r: 10, zIndex: 999})
  const rectangle = new Rectangle( {x: 0, y: 0, width: 10, height: 10})

  scene.add(ellipse, rectangle)

  function update(){
    requestAnimationFrame(update)

    ellipse.position.x ++
    ellipse.position.y ++


    

    renderer.render(scene, camera)
  }

  update()
```