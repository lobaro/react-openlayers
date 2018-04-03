import * as React from 'react';
import olMap from 'ol/map';
import olView from 'ol/view';
import olControl from 'ol/control';
import olInteraction from 'ol/interaction';
import {Util} from './util';
import {Layers} from './layers/layers';
import {layer} from './layers/index';

import './ol.css';
import './map.css';

export const MapContext = React.createContext({})

/**
 * Implementation of ol.map https://openlayers.org/en/latest/apidoc/ol.Map.html
 *
 * example:
 * <Map view={{center: [0, 0], zoom: 1}}>
 *   <layers>
 *     <layer.Tile source={new ol.source.OSM()} />
 *     <layer.Vector options={}/>
 *   </layers>
 *   <controls></controls>
 *   <interactions></interactions>
 *   <overlays></overlays>
 * </Map>
 */
export class Map extends React.Component<any, any> {

  map: olMap;
  mapDiv: any;

  layers: any[] = [];
  interactions: any[] = [];
  controls: any[] = [];
  overlays: any[] = [];

  options: any = {
    pixelRation: undefined,
    keyboardEventTarget: undefined,
    loadTilesWhileAnimation: undefined,
    loadTilesWhileInteractiong: undefined,
    logo: undefined,
    renderer: undefined,
    //new options  for map component : setZoom, SetCenter, setResolution
    /* Added by : Harinder Randhawa */
    setCenter: undefined,
    setZoom: undefined,
    setResolution: undefined,
    view: new olView({center: [0, 0], zoom: 3}),
    controls: undefined,
    interactions: undefined,
    layers: undefined,
    overlays: undefined
  };

  events: any = {
    'change': undefined,
    'change:layerGroup': undefined,
    'change:size': undefined,
    'change:target': undefined,
    'change:view': undefined,
    'click': undefined,
    'dblclick': undefined,
    'moveend': undefined,
    'pointerdrag': undefined,
    'pointermove': undefined,
    'postcompose': undefined,
    'postrender': undefined,
    'precompose': undefined,
    'propertychange': undefined,
    'singleclick': undefined
  };

  /**
   * Component mounting LifeCycle; constructor, componentDidMount, and render
   * https://facebook.github.io/react/docs/react-component.html#mounting
   */
  constructor(props) {
    super(props);
    console.log('Map constructor');
  }

  componentDidMount() {
    let options = Util.getOptions(Object.assign(this.options, this.props));
    !(options.view instanceof olView) && (options.view = new olView(options.view));

    let controlsCmp = Util.findChild(this.props.children, 'Controls') || {};
    let interactionsCmp = Util.findChild(this.props.children, 'Interactions') || {};

    options.controls = olControl.defaults(controlsCmp.props).extend(this.controls);
    options.interactions = olInteraction.defaults(interactionsCmp.props).extend(this.interactions);

    options.layers = this.layers;
    options.overlays = this.overlays;
    console.log('map options', options);

    this.map = new olMap(options);
    this.map.setTarget(options.target || this.mapDiv);

    //regitster events
    let olEvents = Util.getEvents(this.events, this.props);
    for(let eventName in olEvents) {
      this.map.on(eventName, olEvents[eventName]);
    }
  }
  // update the view with new props
  /* Modified by Harinder Randhawa */
  componentWillReceiveProps(nextProps) {
    if(this.props.view && nextProps.view.center !== this.props.view.center){
      this.map.getView().setCenter(nextProps.view.center);
    }
    if(this.props.view && nextProps.view.zoom !== this.props.view.zoom){
      this.map.getView().setZoom(nextProps.view.zoom);
    }
 }
  render() {
    return (
      <MapContext.Provider value={this}>
        <div className="openlayers-map" ref={(el)=> this.mapDiv = el}>
          {this.props.children}
        </div>
      </MapContext.Provider>
    );
  }

  /**
   * Component Updating LifeCycle
   * https://facebook.github.io/react/docs/react-component.html#updating
   */
  //componentWillReceiveProps(nextProps)
  //shouldComponentUpdate(nextProps, nextState)
  //componentWillUpdate(nextProps, nextState)
  //componentDidUpdate(prevProps, prevState)

  /**
   * Component Unmounting LifeCycle
   * https://facebook.github.io/react/docs/react-component.html#unmounting
   */
  componentWillUnmount() {
    this.map.setTarget(undefined)
  }
}