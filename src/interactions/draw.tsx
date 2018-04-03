import * as React from 'react';
import olInteractionDraw from 'ol/interaction/draw';
import {Util} from "../util";
import {MapContext, Map} from '../map';

class Draw extends React.Component<any, any> {

  interaction: olInteractionDraw;

  options: any = {
    clickTolerance: undefined,
    features: undefined,
    source: undefined,
    snapTolerance: undefined,
    type: undefined,
    maxPoints: undefined,
    minPoints: undefined,
    finishCondition: undefined,
    style: undefined,
    geometryFunction: undefined,
    geometryName: undefined,
    condition: undefined,
    freehand: undefined,
    freehandCondition: undefined,
    wrapX: undefined
  };

  events: any = {
    'change': undefined,
    'change:active': undefined,
    'drawend': undefined,
    'drawstart': undefined,
    'propertychange': undefined
  };

  constructor(props) { super(props); }

  render() { return null; }

  componentDidMount () {
    let options = Util.getOptions(Object['assign'](this.options, this.props));
    this.interaction = new olInteractionDraw(options);
    this.props.mapComp.interactions.push(this.interaction);

    let olEvents = Util.getEvents(this.events, this.props);
    for(let eventName in olEvents) {
      this.interaction.on(eventName, olEvents[eventName]);
    }
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps !== this.props){
      this.props.mapComp.map.removeInteraction(this.interaction);
      let options = Util.getOptions(Object['assign'](this.options, nextProps));
      this.interaction = new olInteractionDraw(options);
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
    {mapComp => <Draw {...props} mapComp={mapComp} />}
  </MapContext.Consumer>
);