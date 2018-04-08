import * as React from "react"
import * as ReactDOM from "react-dom"
import olFormatMVT from "ol/format/mvt"
import olTileGrid from "ol/tilegrid"
import olStyleStyle from "ol/style/style"
import olStyleFill from "ol/style/fill"
import olStyleStroke from "ol/style/stroke"
import olSourceVectorTile from "ol/source/vectortile"
import olProj from "ol/proj"
import * as olms from "ol-mapbox-style" // in case we use olms
import * as qwest from "qwest" // in case we need to do ajax call
import {
    interaction,
    layer,
    custom,
    control, //name spaces
    Interactions,
    Overlays,
    Controls, //group
    Map,
    Layers,
    Overlay,
    Util, //objects
} from "react-openlayers"

var attribution = 'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' + 'rest/services/World_Topo_Map/MapServer">ArcGIS</a>'
var format = new olFormatMVT()

var waterStyle = new olStyleStyle({
    fill: new olStyleFill({
        color: "#9db9e8",
    }),
})
var buildingStyle = new olStyleStyle({
    fill: new olStyleFill({
        color: "#666",
        opacity: 0.4,
    }),
    stroke: new olStyleStroke({
        color: "#444",
        width: 1,
    }),
})
var roadStyle = new olStyleStyle({
    stroke: new olStyleStroke({
        color: "#776",
        width: 1,
    }),
})

var esriVectorTiles = new olSourceVectorTile({
    projection: undefined,
    attributions: attribution,
    format: format,
    url: "https://basemaps.arcgis.com/v1/arcgis/rest/services/World_Basemap/VectorTileServer/tile/{z}/{y}/{x}.pbf",
})
var styleFunction = function(feature, resolution) {
    switch (feature.get("layer")) {
        case "Marine area":
            return waterStyle
        case "Road":
            return roadStyle
        case "Building":
            return resolution < 10 ? buildingStyle : null
        default:
            return null
    }
}

export class EsriVectorTiles extends React.Component<any, any> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Map view={{ center: olProj.fromLonLat([-74.0064, 40.6142]), zoom: 16 }}>
                    <Layers>
                        <layer.VectorTile source={esriVectorTiles} style={styleFunction} />
                    </Layers>
                </Map>
                <a href="https://github.com/allenhwkim/react-openlayers/blob/master/app/layers/osm-vector-tiles.tsx">Source Code</a>
                <pre>{`
        <Map view={{center: olProj.fromLonLat([-74.0064, 40.6142]), zoom: 16 }}>
          <Layers>
            <layer.VectorTile source={esriVectorTiles} style={styleFunction} />
          </Layers>
        </Map>
        `}</pre>
            </div>
        )
    }
}
