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
var React = require("react");
var util_1 = require("../util");
// I wish I can name it as 'layers', not 'Layers'
var Controls = /** @class */ (function (_super) {
    __extends(Controls, _super);
    function Controls(props) {
        var _this = _super.call(this, props) || this;
        _this.options = {
            attribution: undefined,
            attributionOptions: undefined,
            rotate: undefined,
            rotateOptions: undefined,
            zoom: undefined,
            zoomOptions: undefined,
        };
        _this.options = util_1.Util.getOptions(Object["assign"](_this.options, _this.props));
        return _this;
    }
    Controls.prototype.render = function () {
        return React.createElement("div", null, this.props.children);
    };
    Controls.prototype.componentDidMount = function () { };
    Controls.prototype.componentWillUnmount = function () { };
    return Controls;
}(React.Component));
exports.Controls = Controls;
//# sourceMappingURL=controls.js.map