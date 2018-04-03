import * as React from 'react';
import olControlFullScreen from 'ol/control/fullscreen';
import {Util} from '../util';
import {MapContext, Map} from '../map';

class FullScreen extends React.Component<any, any> {

  control: olControlFullScreen;

  options: any = {
    className: undefined,
    label: undefined,
    labelActive: undefined,
    tipLabel: undefined,
    keys: undefined,
    target: undefined,
    source: undefined
  };

  events: any = {
    'change': undefined,
    'propertychange': undefined
  };

  constructor(props) { super(props); }

  render() { return null; }

  componentDidMount () {
    let options = Util.getOptions(Object['assign'](this.options, this.props));
    this.control = new olControlFullScreen(options);
    this.props.mapComp.controls.push(this.control)

    let olEvents = Util.getEvents(this.events, this.props);
    for(let eventName in olEvents) {
      this.control.on(eventName, olEvents[eventName]);
    }
  }

}

export default props => (
  <MapContext.Consumer>
    {mapComp => <FullScreen {...props} mapComp={mapComp} />}
  </MapContext.Consumer>
);