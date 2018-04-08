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
var zoom_1 = require("ol/control/zoom");
var util_1 = require("../util");
var map_1 = require("../map");
var Zoom = /** @class */ (function (_super) {
    __extends(Zoom, _super);
    function Zoom(props) {
        var _this = _super.call(this, props) || this;
        _this.options = {
            duration: undefined,
            className: undefined,
            zoomInLabel: undefined,
            zoomOutLabel: undefined,
            zoomInTipLabel: undefined,
            zoomOutTipLabel: undefined,
            delta: undefined,
        };
        _this.events = {
            change: undefined,
            propertychange: undefined,
        };
        return _this;
    }
    Zoom.prototype.render = function () {
        return null;
    };
    Zoom.prototype.componentDidMount = function () {
        var options = util_1.Util.getOptions(Object["assign"](this.options, this.props));
        this.control = new zoom_1.default(options);
        this.props.mapComp.controls.push(this.control);
        var olEvents = util_1.Util.getEvents(this.events, this.props);
        for (var eventName in olEvents) {
            this.control.on(eventName, olEvents[eventName]);
        }
    };
    return Zoom;
}(React.Component));
exports.default = (function (props) { return React.createElement(map_1.MapContext.Consumer, null, function (mapComp) { return React.createElement(Zoom, __assign({}, props, { mapComp: mapComp })); }); });
//# sourceMappingURL=zoom.js.map