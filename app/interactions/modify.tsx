import * as React from "react";
import * as ReactDOM from "react-dom";
import olSourceVector from "ol/source/vector";
import olFormatGeoJSON from "ol/format/geojson";
import olStyleStyle from "ol/style/style";
import olStyleCircle from "ol/style/circle";
import olStyleFill from "ol/style/fill";
import olStyleStroke from "ol/style/stroke";
import olInteractionSelect from "ol/interaction/select";
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "react-openlayers";

var source = new olSourceVector({
  url: 'https://rawgit.com/boundlessgeo/ol3-workshop/master/src/data/layers/7day-M2.5.json',
  format: new olFormatGeoJSON()
});
var style = new olStyleStyle({
  image: new olStyleCircle({
    radius: 7,
    fill: new olStyleFill({ color: [0, 153, 255, 1] }),
    stroke: new olStyleStroke({ color: [255, 255, 255, 0.75], width: 1.5 })
  }),
  zIndex: 100000
});
var select = new olInteractionSelect({style: style});

export class Modify extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Map>
          <Layers>
            <layer.Tile />
            <layer.Vector source={source} style={style} />
          </Layers>
          <Interactions>
            <interaction.Select instance={select} />
            <interaction.Modify features={select.getFeatures()} /> 
          </Interactions>
        </Map>
        <a href="https://github.com/allenhwkim/react-openlayers/blob/master/app/interactions/modify.tsx">source</a>
        <pre>{`
          <Map>
            <Layers>
              <layer.Tile />
              <layer.Vector source={source} style={style} />
            </Layers>
            <Interactions>
              <interaction.Select instance={select} />
              <interaction.Modify features={select.getFeatures()} /> 
            </Interactions>
          </Map>
        `}</pre>
      </div>
    );
  }
}