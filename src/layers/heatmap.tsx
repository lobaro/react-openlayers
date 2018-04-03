import * as React from 'react';
import olLayerHeatmap from 'ol/layer/heatmap';
import { Util } from "../util";
import { MapContext, Map } from '../map';

class Heatmap extends React.Component<any, any> {

  layer: olLayerHeatmap;

  options: any = {
    gradient: undefined,
    radius: undefined,
    blur: undefined,
    shadow: undefined,
    weight: undefined,
    extent: undefined,
    minResolution: undefined,
    maxResolution: undefined,
    opacity: undefined,
    source: undefined,
    visible: undefined
  };

  events: any = {
    'change': undefined,
    'change:blur': undefined,
    'change:extent': undefined,
    'change:gradient': undefined,
    'change:maxResolution': undefined,
    'change:minResolution': undefined,
    'change:opacity': undefined,
    'change:radius': undefined,
    'change:source': undefined,
    'change:visible': undefined,
    'change:zIndex': undefined,
    'postcompose': undefined,
    'precompose': undefined,
    'propertychange': undefined,
    'render': undefined
  };

  constructor(props) { super(props); }

  render() { return null; }

  componentDidMount() {
    let options = Util.getOptions(Object['assign'](this.options, this.props));
    this.layer = new olLayerHeatmap(options);
    if(this.props.zIndex){
      this.layer.setZIndex(this.props.zIndex);
    }
    this.props.mapComp.layers.push(this.layer);

    let olEvents = Util.getEvents(this.events, this.props);
    for (let eventName in olEvents) {
      this.layer.on(eventName, olEvents[eventName]);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      let options = Util.getOptions(Object.assign(this.options, this.props));
      this.props.mapComp.map.removeLayer(this.layer);
      this.layer = new olLayerHeatmap(options);
      if (this.props.zIndex) {
        this.layer.setZIndex(this.props.zIndex);
      }
      this.props.mapComp.map.addLayer(this.layer);

      let olEvents = Util.getEvents(this.events, this.props);
      for (let eventName in olEvents) {
        this.layer.on(eventName, olEvents[eventName]);
      }
    }
  }

  componentWillUnmount() {
    this.props.mapComp.map.removeLayer(this.layer);
  }

}

export default props => (
  <MapContext.Consumer>
    {mapComp => <Heatmap {...props} mapComp={mapComp} />}
  </MapContext.Consumer>
);