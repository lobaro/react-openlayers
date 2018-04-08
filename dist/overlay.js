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
var ReactDOM = require("react-dom");
var overlay_1 = require("ol/overlay");
var util_1 = require("./util");
var map_1 = require("./map");
var Overlay = /** @class */ (function (_super) {
    __extends(Overlay, _super);
    function Overlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.options = {
            id: undefined,
            element: undefined,
            offset: undefined,
            position: undefined,
            stopEvent: undefined,
            insertFirst: undefined,
            autoPan: undefined,
            autoPanAnimation: undefined,
            autoPanMargin: undefined,
        };
        _this.events = {
            change: undefined,
            "change:element": undefined,
            "change:map": undefined,
            "change:offset": undefined,
            "change:position": undefined,
            "change:positioning": undefined,
            propertychange: undefined,
        };
        return _this;
    }
    Overlay.prototype.render = function () {
        return React.createElement("div", null, this.props.children);
    };
    Overlay.prototype.componentDidMount = function () {
        var options = util_1.Util.getOptions(Object["assign"](this.options, this.props));
        options.element = ReactDOM.findDOMNode(this).querySelector("div");
        // console.log('options.element', options.element);
        this.overlay = new overlay_1.default(options);
        this.props.mapComp.overlays.push(this.overlay);
    };
    return Overlay;
}(React.Component));
exports.default = (function (props) { return React.createElement(map_1.MapContext.Consumer, null, function (mapComp) { return React.createElement(Overlay, __assign({}, props, { mapComp: mapComp })); }); });
//# sourceMappingURL=overlay.js.map