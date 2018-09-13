"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var style_1 = require("ol/style/style");
var icon_1 = require("ol/style/icon");
var MarkerStyle = /** @class */ (function () {
    function MarkerStyle(src) {
        this.src = "https://openlayers.org/en/v4.0.1/examples/data/icon.png";
        this.style = new style_1.default({
            image: new icon_1.default(
            /** @type {olx.style.IconOptions} */ ({
                src: this.src,
            })),
        });
        this.selectStyleFunction = function (feature) {
            return new style_1.default({
                image: new icon_1.default({
                    anchor: [0.5, 0.96],
                    color: "#4271AE",
                    src: "https://openlayers.org/en/v4.0.1/examples/data/dot.png",
                }),
            });
        };
        this.src = src;
    }
    return MarkerStyle;
}());
exports.MarkerStyle = MarkerStyle;
//# sourceMappingURL=marker-style.js.map