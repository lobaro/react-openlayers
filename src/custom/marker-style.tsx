import * as React from "react"
import * as ReactDOM from "react-dom"
import olStyleStyle from "ol/style/style"
import olStyleIcon from "ol/style/icon"

class MarkerStyle {
    src: string = "https://openlayers.org/en/v4.0.1/examples/data/icon.png"

    constructor(src?: string) {
        this.src = src
        return this.style
    }

    style = new olStyleStyle({
        image: new olStyleIcon(
            /** @type {olx.style.IconOptions} */ ({
                src: this.src,
            })
        ),
    })

    selectStyleFunction = feature => {
        return new olStyleStyle({
            image: new olStyleIcon({
                anchor: [0.5, 0.96],
                color: "#4271AE",
                src: "https://openlayers.org/en/v4.0.1/examples/data/dot.png",
            }),
        })
    }
}
