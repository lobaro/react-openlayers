"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var style_1 = require("ol/style/style");
var fill_1 = require("ol/style/fill");
var circle_1 = require("ol/style/circle");
var text_1 = require("ol/style/text");
var stroke_1 = require("ol/style/stroke");
var regularshape_1 = require("ol/style/regularshape");
var extent_1 = require("ol/extent");
var ClusterStyle = /** @class */ (function () {
    function ClusterStyle(vectorSource) {
        var _this = this;
        this.vectorStyleFunction = function (feature, resolution) {
            if (resolution != _this.currentResolution) {
                _this.calculateClusterInfo(resolution);
                _this.currentResolution = resolution;
            }
            var style;
            var size = feature.get("features").length;
            if (size > 1) {
                style = new style_1.default({
                    image: new circle_1.default({
                        radius: feature.get("radius"),
                        fill: new fill_1.default({
                            color: [255, 153, 0, Math.min(0.8, 0.4 + size / _this.maxFeatureCount)],
                        }),
                    }),
                    text: new text_1.default({
                        text: size.toString(),
                        fill: new fill_1.default({ color: "#fff" }),
                        stroke: new stroke_1.default({ color: "rgba(0, 0, 0, 0.6)", width: 3 }),
                    }),
                });
            }
            else {
                var originalFeature = feature.get("features")[0];
                style = _this.createClusterStyle(originalFeature);
            }
            return style;
        };
        this.selectStyleFunction = function (feature) {
            var invisibleFill = new fill_1.default({ color: "rgba(255, 255, 255, 0.01)" });
            var styles = [
                new style_1.default({
                    image: new circle_1.default({
                        radius: feature.get("radius"),
                        fill: invisibleFill,
                    }),
                }),
            ];
            var originalFeatures = feature.get("features");
            var originalFeature;
            for (var i = originalFeatures.length - 1; i >= 0; --i) {
                originalFeature = originalFeatures[i];
                styles.push(_this.createClusterStyle(originalFeature));
            }
            return styles;
        };
        this.source = vectorSource;
    }
    ClusterStyle.prototype.calculateClusterInfo = function (resolution) {
        this.maxFeatureCount = 0;
        var features = this.source.getFeatures();
        var feature, radius;
        for (var i = features.length - 1; i >= 0; --i) {
            feature = features[i];
            var originalFeatures = feature.get("features");
            var extent = extent_1.default.createEmpty();
            var j, jj;
            for (j = 0, jj = originalFeatures.length; j < jj; ++j) {
                extent_1.default.extend(extent, originalFeatures[j].getGeometry().getExtent());
            }
            this.maxFeatureCount = Math.max(this.maxFeatureCount, jj);
            radius = 0.25 * (extent_1.default.getWidth(extent) + extent_1.default.getHeight(extent)) / resolution;
            feature.set("radius", radius);
        }
    };
    ClusterStyle.prototype.createClusterStyle = function (feature) {
        var clusterFill = new fill_1.default({ color: "rgba(255, 153, 0, 0.8)" });
        var clusterStroke = new stroke_1.default({ color: "rgba(255, 204, 0, 0.2)", width: 1 });
        // 2012_Earthquakes_Mag5.kml stores the magnitude of each earthquake in a
        // standards-violating <magnitude> tag in each Placemark.  We extract it
        // from the Placemark's name instead.
        var name = feature.get("name");
        var magnitude = parseFloat(name.substr(2));
        var radius = 5 + 20 * (magnitude - 5);
        return new style_1.default({
            geometry: feature.getGeometry(),
            image: new regularshape_1.default({
                radius1: radius,
                radius2: 3,
                points: 5,
                angle: Math.PI,
                fill: clusterFill,
                stroke: clusterStroke,
            }),
        });
    };
    return ClusterStyle;
}());
exports.ClusterStyle = ClusterStyle;
//# sourceMappingURL=cluster-style.js.map