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
// import * as GoogleMapsLoader from 'google-maps';
var GoogleStreetViewPanorama = /** @class */ (function (_super) {
    __extends(GoogleStreetViewPanorama, _super);
    function GoogleStreetViewPanorama(props) {
        return _super.call(this, props) || this;
    }
    GoogleStreetViewPanorama.prototype.render = function () {
        return React.createElement("div", { style: { height: "100%" } });
    };
    GoogleStreetViewPanorama.prototype.initialize = function () {
        // GoogleMapsLoader.load(google => {
        //   this.streetView = new google.maps.StreetViewPanorama(
        //     ReactDOM.findDOMNode(this),
        //     this.props
        //   );
        // });
    };
    GoogleStreetViewPanorama.prototype.componentDidMount = function () {
        this.initialize();
    };
    GoogleStreetViewPanorama.prototype.componentDidUpdate = function () {
        this.initialize();
    };
    return GoogleStreetViewPanorama;
}(React.Component));
exports.GoogleStreetViewPanorama = GoogleStreetViewPanorama;
GoogleStreetViewPanorama["defaultProps"] = {
    streetViewPanoramaOptions: {
        position: { lat: 46.9171876, lng: 17.8951832 },
        pov: { heading: 0, pitch: 0 },
        zoom: 1,
    },
};
//# sourceMappingURL=google-street-view-panorama.js.map