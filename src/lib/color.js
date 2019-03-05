import { throws } from "assert";

export default class Color {
  constructor(r, g, b, a = 1) {

    if (!isNaN(r)) {
      if (r > 0xff) return Color.hexToRGB(r)
      if (!g)
        this._rgba = { r: r, g: r, b: r, a }
      else if (!b)
        this._rgba = { r: r, g: r, b: r, a }
      else
        this._rgba = { r: r, g: r, b: r, a }
    } else {

      const patterns = {
        hex3: /^#?[0-9a-fA-F]{3}$/i,
        hex6: /^#?[0-9a-fA-F]{6}$/i
      }

      for (let [name, regex] of Object.entries(patterns)) {
        const match = regex.exec(r)
        if (match)
          if (name.includes('hex'))
            this._rgba = Color.hexToRGB(r)
      }

    }

  }

  static hsl(hue, saturation, light, alpha = 1) {

    if (isNaN(hue))
      if (Array.isArray(hue))
        [hue, saturation, light, alpha = alpha] = hue
      else if ('h' in hue)
        ({ hue, saturation, light, alpha = alpha } = hue)



    return `hsl(${hue}, ${saturation}, ${light}, ${alpha})`

  }

  static hexToRGB(hex) {

    if (isNaN(hex)) {

      hex = hex.replace(/#/, '')
      const { length } = hex

      if (length === 3) {
        hex = [...hex].map(char => char + char).join('')
      }
      return Color.hexToRGB(parseInt(hex, 16))
    }

    const r = hex >>> 16 & 0xff
    const g = hex >>> 8 & 0xff
    const b = hex & 0xff

    return { r, g, b, a: 1 }
  }

  set _rgba({ r, g, b, a = 1 }) {
    this.r = r
    this.g = g
    this.b = b
    this.a = a
  }


  get rgb() {
    const { r, g, b } = this
    return `rgb(${r},${g},${b})`
  }

  get rgba() {
    const { r, g, b } = this
    return `rgba(${r},${g},${b},${a})`
  }

}