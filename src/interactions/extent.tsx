import * as React from 'react';
import olInteraction from 'ol/interaction';
import {Util} from "../util";
import {MapContext, Map} from '../map';

class Extent extends React.Component<any, any> {

  interaction: any;

  options: any = {
    extent: undefined,
    boxStyle: undefined,
    pointerStyle: undefined,
    wrapX: undefined
  };

  events: any = {
    'Event': undefined,
    'change': undefined,
    'change:active': undefined,
    'propertychange': undefined
  };

  constructor(props) { super(props); }

  render() { return null; }

  componentDidMount () {
    let options = Util.getOptions(Object['assign'](this.options, this.props));
    console.log('options', options);
    this.interaction = new olInteraction['Extent'](options);
    this.props.mapComp.interactions.push(this.interaction)
    
    let olEvents = Util.getEvents(this.events, this.props);
    for(let eventName in olEvents) {
      this.interaction.on(eventName, olEvents[eventName]);
    }
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps !== this.props){
      this.props.mapComp.map.removeInteraction(this.interaction);
      let options = Util.getOptions(Object['assign'](this.options, nextProps));
      this.interaction = new olInteraction['Extent'](options);
      this.props.mapComp.map.addInteraction(this.interaction);

      let olEvents = Util.getEvents(this.events, this.props);
      for(let eventName in olEvents) {
        this.interaction.on(eventName, olEvents[eventName]);
      }
    }
  }
  
  componentWillUnmount () {
    this.props.mapComp.map.removeInteraction(this.interaction);
  }

}

export default props => (
  <MapContext.Consumer>
    {mapComp => <Extent {...props} mapComp={mapComp} />}
  </MapContext.Consumer>
);