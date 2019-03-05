import Rectangle from './rectangle'
import Ellipse from './ellipse'
import Vector from './vector'
import Texture from './texture'

export default class Sensor {
    constructor(opt, texture) {

        const options = {
            x: 0,
            y: 0,
            radius: 10,
            width: 10,
            height: 10,
            drawFrom: 'center'
        }

        Object.assign(options, opt)

        const {
            x,
            y,
            radius,
            width,
            height,
            drawFrom
        } = options

        this._options = {
            position: new Vector(x, y),
            radius,
            width,
            height,
            texture: texture ? texture : Texture.Default(),
            drawFrom
        }

        const a = new Texture({ fill: 'rgba(0, 255, 0, 0.3)', stroke: 0xffffff, strokeWeight: 20 })

        console.log(a)
        const b = new Texture({ fill: 0xff0000 })

        this.rectangle = new Rectangle({ x, y, width, height, drawFrom}, b)
        this.ellipse = new Ellipse({ x, y, radius }, a)

    }

    get x() {
        const {
            x
        } = this._options.position
        return x
    }

    get y() {
        const {
            y
        } = this._options.position
        return y
    }

    get radius() {
        const {
            height
        } = this._options
        return height
    }

    get width() {
        const {
            width
        } = this._options
        return width
    }

    get height() {
        const {
            height
        } = this._options
        return height
    }

    get texture() {
        const {
            texture
        } = this._options
        return texture
    }

    get drawFrom() {
        const {
            drawFrom
        } = this._options
        return drawFrom
    }

    set position(position) {
        this._options.position = position
        return this
    }

    set x(x) {
        this._options.position.x = x
        return this
    }

    set y(y) {
        this._options.position.y = y
        return this
    }

    set radius(radius) {
        this._options.radius = radius
        return this
    }

    set width(width) {
        this._options.width = width
        return this
    }

    set height(height) {
        this._options.height = height
        return this
    }

    set texture(texture) {
        this._options.texture = texture
        return this
    }

    set drawFrom(from) {
        this._options.drawFrom = from
        return this
    }


}