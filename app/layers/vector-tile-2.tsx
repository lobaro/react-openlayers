import * as React from "react";
import * as ReactDOM from "react-dom";
import olSoureVectorTile from "ol/source/vectortile";
import olFormatMVT from "ol/format/mvt";
import olTileGrid from "ol/tilegrid";
import {applyStyle} from 'ol-mapbox-style'; // in case we use olms
import stylefuction from 'ol-mapbox-style/stylefunction';

import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "react-openlayers";

var key = 'pk.eyJ1IjoiYWxsZW5od2tpbSIsImEiOiJjajBlbzkzazYwMWh1Mndya3R2amw0ang1In0.QU0YtPQ0-IgHMLt574HGlw';
var source = new olSoureVectorTile({
  projection: undefined,
  attributions: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
    '© <a href="https://www.openstreetmap.org/copyright">' +
    'OpenStreetMap contributors</a>',
  format: new olFormatMVT(),
  tileGrid: olTileGrid.createXYZ({maxZoom: 22}),
  tilePixelRatio: 16,
  url: 'https://free-0.tilehosting.com/data/v3/{z}/{x}/{y}.pbf?key=tXiQqN3lIgskyDErJCeY'
  ///url: 'https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/{z}/{x}/{y}.vector.pbf?access_token=' + key
});

var view = {
  center: [732602.1417165294, 5864590.06411005],
  resolution: 2445,
  maxResolution: 78271.51696402048
};

export class VectorTile2 extends React.Component<any,any> {

  constructor(props) {
    super(props);
    this.state = {style: undefined};
  }

  addLayerStyle = function(layer) {
    fetch('https://openmaptiles.github.io/klokantech-basic-gl-style/style-cdn.json')
      .then(function(response) {
        response.json().then(function(glStyle) {
          // @FIXME
          // stylefuction(layer, glStyle, 'openmaptiles');

          // applyStyle(layer, glStyle, 'openmaptiles').then(function() {
          //   console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxx')
          //   // map.addLayer(layer);
          // });
        });
      });
  }

  render() {
    return (
      <div>
        <Map view={view}>
          <Layers>
            <layer.VectorTile source={source} callback={this.addLayerStyle} />
          </Layers>
        </Map>
      </div>
    );
  }
}

