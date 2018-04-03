import * as React from 'react';
import olInteractionDragZoom from 'ol/interaction/dragzoom';
import {Util} from "../util";
import {MapContext, Map} from '../map';

class DragZoom extends React.Component<any, any> {

  interaction: olInteractionDragZoom;

  options: any = {
    className: undefined,
    condition: undefined,
    duration: undefined,
    out: undefined
  };

  events: any = {
    'boxdrag': undefined,
    'boxend': undefined,
    'boxstart': undefined,
    'change': undefined,
    'change:active': undefined,
    'propertychange': undefined
  };

  constructor(props) { super(props); }

  render() { return null; }

  componentDidMount () {
    let options = Util.getOptions(Object['assign'](this.options, this.props));
    console.log('options', options);
    this.interaction = new olInteractionDragZoom(options);
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
      this.interaction = new olInteractionDragZoom(options);
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
    {mapComp => <DragZoom {...props} mapComp={mapComp} />}
  </MapContext.Consumer>
);