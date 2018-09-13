"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var popup_1 = require("./popup");
var google_street_view_panorama_1 = require("./google-street-view-panorama");
var cluster_style_1 = require("./style/cluster-style");
var marker_style_1 = require("./style/marker-style");
var custom = {
    style: {
        MarkerStyle: marker_style_1.MarkerStyle,
        ClusterStyle: cluster_style_1.ClusterStyle,
    },
    Popup: popup_1.Popup,
    GoogleStreetViewPanorama: google_street_view_panorama_1.GoogleStreetViewPanorama,
};
exports.custom = custom;
//# sourceMappingURL=index.js.map