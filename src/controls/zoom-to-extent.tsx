import * as React from 'react';
import olControlZoomToExtent from 'ol/control/zoomtoextent';
import {Util} from '../util';
import {MapContext, Map} from '../map';

class ZoomToExtent extends React.Component<any, any> {

  control: olControlZoomToExtent;

  options: any = {
    className: undefined,
    target: undefined,
    label: undefined,
    tipLabel: undefined,
    extent: undefined
  };

  events: any = {
    'change': undefined,
    'propertychange': undefined
  };

  constructor(props) { super(props); }

  render() { return null; }

  componentDidMount () {
    let options = Util.getOptions(Object['assign'](this.options, this.props));
    this.control = new olControlZoomToExtent(options);
    this.props.mapComp.controls.push(this.control)

    let olEvents = Util.getEvents(this.events, this.props);
    for(let eventName in olEvents) {
      this.control.on(eventName, olEvents[eventName]);
    }
  }

}

export default props => (
  <MapContext.Consumer>
    {mapComp => <ZoomToExtent {...props} mapComp={mapComp} />}
  </MapContext.Consumer>
);