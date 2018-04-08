import { Popup } from "./popup"
import { GoogleStreetViewPanorama } from "./google-street-view-panorama"
import { ClusterStyle } from "./style/cluster-style"
import { MarkerStyle } from "./style/marker-style"

let custom = {
    style: {
        MarkerStyle: MarkerStyle,
        ClusterStyle: ClusterStyle,
    },
    Popup: Popup,
    GoogleStreetViewPanorama: GoogleStreetViewPanorama,
}

export { custom }
