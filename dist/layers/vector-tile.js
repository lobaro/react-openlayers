"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var vectortile_1 = require("ol/layer/vectortile");
var util_1 = require("../util");
var map_1 = require("../map");
var VectorTile = /** @class */ (function (_super) {
    __extends(VectorTile, _super);
    function VectorTile(props) {
        var _this = _super.call(this, props) || this;
        _this.options = {
            renderBuffer: undefined,
            renderMode: undefined,
            renderOrder: undefined,
            extent: undefined,
            minResolution: undefined,
            maxResolution: undefined,
            opacity: undefined,
            preload: undefined,
            source: undefined,
            style: undefined,
            updateWhileAnimating: undefined,
            updateWhileInteracting: undefined,
            visible: undefined,
        };
        _this.events = {
            change: undefined,
            "change:extent": undefined,
            "change:maxResolution": undefined,
            "change:minResolution": undefined,
            "change:opacity": undefined,
            "change:preload": undefined,
            "change:source": undefined,
            "change:useInterimTilesOnError": undefined,
            "change:visible": undefined,
            "change:zIndex": undefined,
            postcompose: undefined,
            precompose: undefined,
            propertychange: undefined,
            render: undefined,
        };
        return _this;
    }
    VectorTile.prototype.render = function () {
        return null;
    };
    VectorTile.prototype.componentDidMount = function () {
        var options = util_1.Util.getOptions(Object.assign(this.options, this.props));
        this.layer = new vectortile_1.default(options);
        if (this.options.callback) {
            this.options.callback(this.layer);
        }
        if (this.props.zIndex) {
            this.layer.setZIndex(this.props.zIndex);
        }
        this.props.mapComp.layers.push(this.layer);
        // If the map has already been mounted then we need to manually add the layer to the OL Map
        if ("map" in this.props.mapComp) {
            this.props.mapComp.map.addLayer(this.layer);
        }
        var olEvents = util_1.Util.getEvents(this.events, this.props);
        for (var eventName in olEvents) {
            this.layer.on(eventName, olEvents[eventName]);
        }
    };
    VectorTile.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps !== this.props) {
            if ("visible" in nextProps && nextProps.visible !== this.props.visible) {
                this.layer.setVisible(nextProps.visible);
            }
            if ("extent" in nextProps && nextProps.extent !== this.props.extent) {
                this.layer.setExtent(nextProps.extent);
            }
            if ("style" in nextProps && nextProps.style !== this.props.style) {
                this.layer.setStyle(nextProps.style);
            }
            if ("opacity" in nextProps && nextProps.opacity !== this.props.opacity) {
                this.layer.setOpacity(nextProps.opacity);
            }
            if ("properties" in nextProps && nextProps.properties !== undefined) {
                this.layer.setProperties(nextProps.properties, /* opt_silent */ true);
            }
            if ("source" in nextProps && nextProps.source !== this.props.source) {
                this.layer.setSource(nextProps.source);
            }
            if ("zIndex" in nextProps && nextProps.zIndex !== this.props.zIndex) {
                this.layer.setZIndex(nextProps.zIndex);
            }
            // let options = Util.getOptions(Object.assign(this.options, this.props))
            // this.props.mapComp.map.removeLayer(this.layer)
            // this.layer = new olLayerVectorTile(options)
            // if (this.options.callback) {
            //     this.options.callback(this.layer)
            // }
            // if (this.props.zIndex) {
            //     this.layer.setZIndex(this.props.zIndex)
            // }
            // this.props.mapComp.map.addLayer(this.layer)
            // let olEvents = Util.getEvents(this.events, this.props)
            // for (let eventName in olEvents) {
            //     this.layer.on(eventName, olEvents[eventName])
            // }
        }
    };
    VectorTile.prototype.componentWillUnmount = function () {
        this.props.mapComp.map.removeLayer(this.layer);
    };
    return VectorTile;
}(React.Component));
exports.default = (function (props) { return React.createElement(map_1.MapContext.Consumer, null, function (mapComp) { return React.createElement(VectorTile, __assign({}, props, { mapComp: mapComp })); }); });
//# sourceMappingURL=vector-tile.js.map