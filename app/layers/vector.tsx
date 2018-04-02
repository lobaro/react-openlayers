import * as React from "react";
import * as ReactDOM from "react-dom";
import olFeature from "ol/feature";
import olSoureVector from "ol/source/vector";
import olGeomPoint from "ol/geom/point";
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "react-openlayers";

var iconFeature = new olFeature(new olGeomPoint([0, 0]));
var source = new olSoureVector({features: [iconFeature]});
var marker = new custom.style.MarkerStyle(
  'https://openlayers.org/en/v4.0.1/examples/data/icon.png'
);

export class Vector extends React.Component<any,any> {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <Map>
          <Layers>
            <layer.Tile/>
            <layer.Vector source={source} style={marker.style} zIndex="1"/>
          </Layers>
        </Map>
        <a href="https://github.com/allenhwkim/react-openlayers/blob/master/app/layers/vector.tsx">Source Code</a>
        <pre>{`
        <Map>
          <Layers>
            <layer.Tile/>
            <layer.Vector source={source} style={marker.style} zIndex="1"/>
          </Layers>
        </Map>
        `}</pre>
      </div>
    );
  }
}