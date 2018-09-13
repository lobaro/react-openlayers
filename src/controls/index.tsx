import { default as ScaleLine } from "./scale-line"
import { default as Attribution } from "./attribution"
import { default as FullScreen } from "./full-screen"
import { default as MousePosition } from "./mouse-position"
import { default as OverviewMap } from "./overview-map"
import { default as Rotate } from "./rotate"
import { default as ZoomSlider } from "./zoom-slider"
import { default as ZoomToExtent } from "./zoom-to-extent"
import { default as Zoom } from "./zoom"
import { Controls } from "./controls"

let control = {
    ScaleLine: ScaleLine,
    Attribution: Attribution,
    FullScreen: FullScreen,
    MousePosition: MousePosition,
    OverviewMap: OverviewMap,
    Rotate: Rotate,
    ZoomSlider: ZoomSlider,
    ZoomToExtent: ZoomToExtent,
    Zoom: Zoom,
}

export { Controls, control }
