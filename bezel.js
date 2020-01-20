class Bezel {
  static get inputProperties() {
    return ["--bezel-color", '--bezel-width']
  }
  static get inputArguments() {}
  static get contextOptions() {}
  paint(ctx, geom, properties, args) {

    console.log(properties.get("--bezel-color"))
    // ctx.lineWidth = 10
    ctx.lineWidth = properties.get("--bezel-width")
    // ctx.lineWidth = properties.get("--bezel-color")
    const inset = ctx.lineWidth / 15
    const radius = [20,0,20,0]
    const topLeftRadius = radius[0]
    const topRightRadius = radius[1]
    const bottomRightRadius = radius[2]
    const bottomLeftRadius = radius[3]

    const width = geom.width
    const height = geom.height

    ctx.lineTo(topLeftRadius, inset)
    ctx.lineTo(width-topRightRadius, inset)
    ctx.lineTo(width-inset, topRightRadius)
    ctx.lineTo(width-inset, height-bottomRightRadius)
    ctx.lineTo(width-bottomRightRadius, height-inset)
    ctx.lineTo(bottomLeftRadius, height-inset)
    ctx.lineTo(inset,height-bottomLeftRadius)
    ctx.lineTo(inset, topLeftRadius)

    ctx.closePath()
    ctx.stroke()


  }
}

registerPaint("bezel", Bezel);
