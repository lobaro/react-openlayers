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
require("./popup.css");
var Popup = /** @class */ (function (_super) {
    __extends(Popup, _super);
    function Popup(props) {
        var _this = this;
        console.log(2222222222);
        _this = _super.call(this, props) || this;
        return _this;
    }
    Popup.prototype.componentDidMount = function () {
        var _this = this;
        this.contentClose.addEventListener("click", function () {
            _this.containerEl.style.display = "none";
        });
    };
    Popup.prototype.render = function () {
        var _this = this;
        console.log(3333333333);
        return (React.createElement("div", { className: "olPopup", ref: function (el) { return (_this.containerEl = el); } },
            React.createElement("a", { className: "olPopupCloser", href: "javascript:void(0)", ref: function (el) { return (_this.contentClose = el); } }),
            React.createElement("div", { className: "olPopupContents", ref: function (el) { return (_this.contentEl = el); } })));
    };
    Popup.prototype.setContents = function (html) {
        this.contentEl.innerHTML = html;
    };
    Popup.prototype.show = function (bottomDistance) {
        if (bottomDistance === void 0) { bottomDistance = "12px"; }
        this.containerEl.style.bottom = bottomDistance;
        this.containerEl.style.display = "block";
    };
    return Popup;
}(React.Component));
exports.Popup = Popup;
//# sourceMappingURL=popup.js.map