import * as React from 'react';

import olSourceOSM from 'ol/source/osm';
import olLayerTile from 'ol/layer/tile';

import {Util} from '../util';
import {MapContext, Map} from '../map';

class Tile extends React.Component<any, any> {
  layer: olLayerTile;

  options: any = {
    zIndex: undefined,
    opacity: undefined,
    preload: undefined,
    source: undefined,
    visible: undefined,
    extent: undefined,
    minResolution: undefined,
    maxResolution: undefined,
    useInterimTilesOnError: undefined
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
    console.log('Tile constructor');
  }

  render() {
    return null;
  }

  componentDidMount () {
    let options = Util.getOptions(Object.assign(this.options, this.props));
    options.source = options.source || new olSourceOSM();
    this.layer = new olLayerTile(options);
    if(this.props.zIndex){
      this.layer.setZIndex(this.props.zIndex);
    }
    this.props.mapComp.layers.push(this.layer)

    let olEvents = Util.getEvents(this.events, this.props);
    for(let eventName in olEvents) {
      this.layer.on(eventName, olEvents[eventName]);
    }
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps !== this.props){
      let options = Util.getOptions(Object.assign(this.options, this.props));
      this.props.mapComp.map.add
      this.props.mapComp.map.removeLayer(this.layer);
      this.layer = new olLayerTile(options);
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
    // this.props.mapComp.map.removeLayer(this.layer);
  }

}

export default props => (
  <MapContext.Consumer>
    {mapComp => <Tile {...props} mapComp={mapComp} />}
  </MapContext.Consumer>
);