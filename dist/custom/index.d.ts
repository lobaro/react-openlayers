import { Popup } from "./popup";
import { GoogleStreetViewPanorama } from "./google-street-view-panorama";
import { ClusterStyle } from "./style/cluster-style";
import { MarkerStyle } from "./style/marker-style";
declare let custom: {
    style: {
        MarkerStyle: typeof MarkerStyle;
        ClusterStyle: typeof ClusterStyle;
    };
    Popup: typeof Popup;
    GoogleStreetViewPanorama: typeof GoogleStreetViewPanorama;
};
export { custom };
