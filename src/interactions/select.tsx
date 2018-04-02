import * as React from 'react';
import olMap from 'ol/map';
import olInteractionSelect from 'ol/interaction/select';
import {Util} from "../util";
import {Map} from '../map';

export class Select extends React.Component<any, any> {

  interaction: olInteractionSelect;

  options: any = {
    addCondition: undefined,
    condition: undefined,
    layers: undefined,
    style: undefined,
    removeCondition: undefined,
    toggleCondition: undefined,
    multi: undefined,
    features: undefined,
    filter: undefined,
    wrapX: undefined,
    hitTolerance: undefined
  };

  events: any = {
    'change': undefined,
    'change:active': undefined,
    'propertychange': undefined,
    'select': undefined
  };

  constructor(props) { super(props); }

  render() { return null; }

  componentDidMount () {
    if (this.props.instance) {
      this.interaction = this.props.instance;
    } else {
      let options = Util.getOptions(Object['assign'](this.options, this.props));
      this.interaction = new olInteractionSelect(options);
    }
    this.context.mapComp.interactions.push(this.interaction)
    
    let olEvents = Util.getEvents(this.events, this.props);
    for(let eventName in olEvents) {
      this.interaction.on(eventName, olEvents[eventName]);
    }
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps !== this.props){
      this.context.mapComp.map.removeInteraction(this.interaction);

      if (this.props.instance) {
        this.interaction = this.props.instance;
      } else {
        let options = Util.getOptions(Object['assign'](this.options, nextProps));
        this.interaction = new olInteractionSelect(options);
      }
      this.context.mapComp.map.addInteraction(this.interaction);

      let olEvents = Util.getEvents(this.events, this.props);
      for(let eventName in olEvents) {
        this.interaction.on(eventName, olEvents[eventName]);
      }
    }
  }
  
  componentWillUnmount () {
    this.context.mapComp.map.removeInteraction(this.interaction);
  }

}

Select['contextTypes'] = {
  mapComp: React.PropTypes.instanceOf(Map),
  map: React.PropTypes.instanceOf(olMap)
};
