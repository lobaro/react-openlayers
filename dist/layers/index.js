"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tile_1 = require("./tile");
var vector_1 = require("./vector");
var layers_1 = require("./layers");
exports.Layers = layers_1.Layers;
var heatmap_1 = require("./heatmap");
exports.Heatmap = heatmap_1.default;
var image_1 = require("./image");
exports.Image = image_1.default;
var vector_tile_1 = require("./vector-tile");
exports.VectorTile = vector_tile_1.default;
var layer = {
    Tile: tile_1.default,
    Vector: vector_1.default,
    Heatmap: heatmap_1.default,
    Image: image_1.default,
    VectorTile: vector_tile_1.default,
};
exports.layer = layer;
//# sourceMappingURL=index.js.map