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
Object.defineProperty(exports, "__esModule", { value: true });
var control_1 = require("ol/control");
var interaction_1 = require("ol/interaction");
var map_1 = require("ol/map");
require("ol/ol.css");
var view_1 = require("ol/view");
var React = require("react");
require("./map.css");
var util_1 = require("./util");
exports.MapContext = React.createContext({});
/**
 * Implementation of ol.map https://openlayers.org/en/latest/apidoc/ol.Map.html
 *
 * example:
 * <Map view={{center: [0, 0], zoom: 1}}>
 *   <layers>
 *     <layer.Tile source={new ol.source.OSM()} />
 *     <layer.Vector options={}/>
 *   </layers>
 *   <controls></controls>
 *   <interactions></interactions>
 *   <overlays></overlays>
 * </Map>
 */
var Map = /** @class */ (function (_super) {
    __extends(Map, _super);
    /**
     * Component mounting LifeCycle; constructor, componentDidMount, and render
     * https://facebook.github.io/react/docs/react-component.html#mounting
     */
    function Map(props) {
        var _this = _super.call(this, props) || this;
        _this.layers = [];
        _this.interactions = [];
        _this.controls = [];
        _this.overlays = [];
        _this.options = {
            pixelRation: undefined,
            keyboardEventTarget: undefined,
            loadTilesWhileAnimation: undefined,
            loadTilesWhileInteractiong: undefined,
            logo: undefined,
            renderer: undefined,
            //new options  for map component : setZoom, SetCenter, setResolution
            /* Added by : Harinder Randhawa */
            setCenter: undefined,
            setZoom: undefined,
            setResolution: undefined,
            view: new view_1.default({ center: [0, 0], zoom: 3 }),
            controls: undefined,
            interactions: undefined,
            layers: undefined,
            overlays: undefined,
            moveTolerance: undefined,
        };
        _this.events = {
            change: undefined,
            "change:layerGroup": undefined,
            "change:size": undefined,
            "change:target": undefined,
            "change:view": undefined,
            click: undefined,
            dblclick: undefined,
            moveend: undefined,
            movestart: undefined,
            pointerdrag: undefined,
            pointermove: undefined,
            postcompose: undefined,
            postrender: undefined,
            precompose: undefined,
            propertychange: undefined,
            singleclick: undefined,
        };
        _this.mapDiv = React.createRef();
        return _this;
    }
    Map.prototype.componentDidMount = function () {
        console.log("Loading props:", this.props);
        var options = util_1.Util.getOptions(Object.assign(this.options, this.props));
        !(options.view instanceof view_1.default) && (options.view = new view_1.default(options.view));
        console.log("Loaded view:", options);
        var controlsCmp = util_1.Util.findChild(this.props.children, "Controls") || {};
        var interactionsCmp = util_1.Util.findChild(this.props.children, "Interactions") || {};
        options.controls = control_1.default.defaults(controlsCmp.props).extend(this.controls);
        options.interactions = interaction_1.default.defaults(interactionsCmp.props).extend(this.interactions);
        options.layers = this.layers;
        options.overlays = this.overlays;
        this.map = new map_1.default(options);
        this.map.setTarget(options.target || this.mapDiv);
        this.updateFromProps(this.props, /* isMounting = */ true);
        //regitster events
        var olEvents = util_1.Util.getEvents(this.events, this.props);
        for (var eventName in olEvents) {
            this.map.on(eventName, olEvents[eventName]);
        }
    };
    Map.prototype.updateCenterAndResolutionFromProps = function (props) {
        var view = this.map.getView();
        // FIXME For standalone usage
        if (props.view && props.view.position && props.view.position.allowUpdate) {
            // The position object has declared that we need to update the map position (allowUpdate).
            // A position object is:
            // {
            //   zoom: Number = Required
            //   extent: ol.Extent = Optional
            //   center: ol.Coordinate = Optional
            // }
            if (typeof props.view.position.extent !== "undefined") {
                view.fit(props.view.position.extent, { size: this.map.getSize(), maxZoom: props.view.position.zoom });
            }
            else if (typeof props.view.position.center !== "undefined" && typeof props.view.position.zoom !== "undefined") {
                view.setCenter(props.view.position.center);
                view.setZoom(props.view.position.zoom);
            }
        }
        else if (props.view) {
            // Only used at mount time
            view.setCenter(props.view.center);
            if (typeof props.view.resolution !== "undefined") {
                view.setResolution(props.view.resolution);
            }
            else if (typeof props.view.zoom !== "undefined") {
                view.setZoom(props.view.zoom);
            }
        }
    };
    Map.prototype.updateFromProps = function (props, isMounting) {
        if (isMounting || (props.view && props.view.position && props.view.position.allowUpdate)) {
            // Update the center and the resolution of the view only when it is
            // mounted the first time but not when the properties are updated.
            // *Unless* we're passed a position object that explicitly declares
            // that we need to update.
            this.updateCenterAndResolutionFromProps(props);
        }
    };
    // update the view with new props
    /* Modified by Harinder Randhawa */
    Map.prototype.componentWillReceiveProps = function (nextProps) {
        this.updateFromProps(nextProps, false);
        // if (this.props.view && nextProps.view.center !== this.props.view.center) {
        //     console.log("map->componentWillReceiveProps->setCenter", nextProps.view.center, this.props.view.center)
        //     this.map.getView().setCenter(nextProps.view.center)
        // }
        // if (this.props.view && nextProps.view.zoom !== this.props.view.zoom) {
        //     console.log("map->componentWillReceiveProps->setZoom", nextProps.view.zoom, this.props.view.zoom)
        //     this.map.getView().setZoom(nextProps.view.zoom)
        // }
    };
    Map.prototype.render = function () {
        var _this = this;
        console.log("rendering open layer map", this.props);
        return (React.createElement(exports.MapContext.Provider, { value: this },
            React.createElement("div", { className: "openlayers-map", style: this.props.rootStyle, ref: function (el) { return (_this.mapDiv = el); } }, this.props.children)));
    };
    /**
     * Component Updating LifeCycle
     * https://facebook.github.io/react/docs/react-component.html#updating
     */
    //componentWillReceiveProps(nextProps)
    //shouldComponentUpdate(nextProps, nextState)
    //componentWillUpdate(nextProps, nextState)
    //componentDidUpdate(prevProps, prevState)
    /**
     * Component Unmounting LifeCycle
     * https://facebook.github.io/react/docs/react-component.html#unmounting
     */
    Map.prototype.componentWillUnmount = function () {
        this.map.setTarget(undefined);
    };
    return Map;
}(React.Component));
exports.Map = Map;
//# sourceMappingURL=map.js.map