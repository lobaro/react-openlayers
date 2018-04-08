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
var osm_1 = require("ol/source/osm");
var tile_1 = require("ol/layer/tile");
var util_1 = require("../util");
var map_1 = require("../map");
var Tile = /** @class */ (function (_super) {
    __extends(Tile, _super);
    function Tile(props) {
        var _this = _super.call(this, props) || this;
        _this.options = {
            zIndex: undefined,
            opacity: undefined,
            preload: undefined,
            source: undefined,
            visible: undefined,
            extent: undefined,
            minResolution: undefined,
            maxResolution: undefined,
            useInterimTilesOnError: undefined,
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
    Tile.prototype.render = function () {
        return null;
    };
    Tile.prototype.componentDidMount = function () {
        var options = util_1.Util.getOptions(Object.assign(this.options, this.props));
        options.source = options.source || new osm_1.default();
        this.layer = new tile_1.default(options);
        if (this.props.zIndex) {
            this.layer.setZIndex(this.props.zIndex);
        }
        this.props.mapComp.layers.push(this.layer);
        var olEvents = util_1.Util.getEvents(this.events, this.props);
        for (var eventName in olEvents) {
            this.layer.on(eventName, olEvents[eventName]);
        }
    };
    Tile.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps !== this.props) {
            if ("visible" in nextProps && nextProps.visible !== this.props.visible) {
                this.layer.setVisible(nextProps.visible);
            }
            if ("zIndex" in nextProps && nextProps.zIndex !== this.props.zIndex) {
                this.layer.setZIndex(nextProps.zIndex);
            }
            if ("opacity" in nextProps && nextProps.opacity !== this.props.opacity) {
                this.layer.setOpacity(nextProps.opacity);
            }
            if ("properties" in nextProps && nextProps.properties !== undefined) {
                this.layer.setProperties(nextProps.properties, /* opt_silent */ true);
            }
            // let options = Util.getOptions(Object.assign(this.options, this.props))
            // this.props.mapComp.map.add
            // this.props.mapComp.map.removeLayer(this.layer)
            // this.layer = new olLayerTile(options)
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
    Tile.prototype.componentWillUnmount = function () {
        this.props.mapComp.map.removeLayer(this.layer);
    };
    return Tile;
}(React.Component));
exports.default = (function (props) { return React.createElement(map_1.MapContext.Consumer, null, function (mapComp) { return React.createElement(Tile, __assign({}, props, { mapComp: mapComp })); }); });
//# sourceMappingURL=tile.js.map