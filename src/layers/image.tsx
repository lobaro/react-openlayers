import * as React from 'react';
import olLayerImage from 'ol/layer/image';
import {Util} from "../util";
import {MapContext, Map} from '../map';

class Image extends React.Component<any, any> {

  layer: olLayerImage;

  options: any = {
    opacity: undefined,
    source: undefined,
    visible: undefined,
    extent: undefined,
    minResolution: undefined,
    maxResolution: undefined
  };

  events: any = {
    'change': undefined,
    'change:extent': undefined,
    'change:gradient': undefined,
    'change:maxResolution': undefined,
    'change:minResolution': undefined,
    'change:opacity': undefined,
    'change:source': undefined,
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

  render() { return null; }

  componentDidMount () {
    let options = Util.getOptions(Object['assign'](this.options, this.props));
    this.layer = new olLayerImage(options);
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
      this.layer = new olLayerImage(options);
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
    {mapComp => <Image {...props} mapComp={mapComp} />}
  </MapContext.Consumer>
);