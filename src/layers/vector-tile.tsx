import * as React from 'react';
import olLayerVector from 'ol/layer/vector';
import olLayerVectorTile from 'ol/layer/vectortile';
import {Util} from "../util";
import {MapContext, Map} from '../map';

class VectorTile extends React.Component<any, any> {

  layer: olLayerVectorTile;

  options: any = {
    renderBuffer: undefined,
    renderMode: undefined,
    renderOrder: undefined,
    extent: undefined,
    minResolution: undefined,
    maxResolution: undefined,
    opacity: undefined,
    preload: undefined,
    source: undefined,
    style: undefined,
    updateWhileAnimating: undefined,
    updateWhileInteracting: undefined,
    visible: undefined
  };

  events: any = {
    'change': undefined,
    'change:extent': undefined,
    'change:maxResolution': undefined,
    'change:minResolution': undefined,
    'change:opacity': undefined,
    'change:preload': undefined,
    'change:source': undefined,
    'change:useInterimTilesOnError': undefined,
    'change:visible': undefined,
    'change:zIndex': undefined,
    'postcompose': undefined,
    'precompose': undefined,
    'propertychange': undefined,
    'render': undefined
  };

  constructor(props) {
    super(props);
  }

  render() {
    return null;
  }

  componentDidMount () {
    let options = Util.getOptions(Object.assign(this.options, this.props));
    this.layer = new olLayerVectorTile(options);
    if (this.options.callback) {
      this.options.callback(this.layer);
    }
    if(this.props.zIndex){
      this.layer.setZIndex(this.props.zIndex);
    }
    this.props.mapComp.layers.push(this.layer);
    
    let olEvents = Util.getEvents(this.events, this.props);
    for(let eventName in olEvents) {
      this.layer.on(eventName, olEvents[eventName]);
    }
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps !== this.props){
      let options = Util.getOptions(Object.assign(this.options, this.props));
      this.props.mapComp.map.removeLayer(this.layer);
      this.layer = new olLayerVectorTile(options);
      if (this.options.callback) {
        this.options.callback(this.layer);
      }
      if(this.props.zIndex){
        this.layer.setZIndex(this.props.zIndex);
      }
      this.props.mapComp.map.addLayer(this.layer);

      let olEvents = Util.getEvents(this.events, this.props);
      for(let eventName in olEvents) {
        this.layer.on(eventName, olEvents[eventName]);
      }
    }
  }
  
  componentWillUnmount () {
    this.props.mapComp.map.removeLayer(this.layer);
  }

}

export default props => (
  <MapContext.Consumer>
    {mapComp => <VectorTile {...props} mapComp={mapComp} />}
  </MapContext.Consumer>
);