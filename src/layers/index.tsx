import { default as Tile } from "./tile"
import { default as Vector } from "./vector"
import { Layers } from "./layers"
import { default as Heatmap } from "./heatmap"
import { default as Image } from "./image"
import { default as VectorTile } from "./vector-tile"

let layer = {
    Tile: Tile,
    Vector: Vector,
    Heatmap: Heatmap,
    Image: Image,
    VectorTile: VectorTile,
}

export { Layers, layer, Heatmap, Image, VectorTile }
