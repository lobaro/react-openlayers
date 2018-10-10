import olControl from "ol/control"
import olInteraction from "ol/interaction"
import olMap from "ol/map"
import "ol/ol.css"
import olView from "ol/view"
import * as React from "react"
import "./map.css"
import { Util } from "./util"

export const MapContext = React.createContext({});

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
        view: new olView({ center: [0, 0], zoom: 3 }),
        controls: undefined,
        interactions: undefined,
        layers: undefined,
        overlays: undefined,
        moveTolerance: undefined,
    };

    events: any = {
        change: undefined,
        "change:layerGroup": undefined,
        "change:size": undefined,
        "change:target": undefined,
        "change:view": undefined,
        click: undefined,
        dblclick: undefined,
        moveend: undefined,
        movestart: undefined,
        pointerdrag: undefined,
        pointermove: undefined,
        postcompose: undefined,
        postrender: undefined,
        precompose: undefined,
        propertychange: undefined,
        singleclick: undefined,
    };

    /**
     * Component mounting LifeCycle; constructor, componentDidMount, and render
     * https://facebook.github.io/react/docs/react-component.html#mounting
     */
    constructor(props) {
        super(props);
        this.mapDiv = React.createRef();
    }

    componentDidMount() {
        console.log("Loading props:", this.props);
        let options = Util.getOptions(Object.assign(this.options, this.props));
        !(options.view instanceof olView) && (options.view = new olView(options.view));


        console.log("Loaded view:", options);

        let controlsCmp = Util.findChild(this.props.children, "Controls") || {};
        let interactionsCmp = Util.findChild(this.props.children, "Interactions") || {};

        options.controls = olControl.defaults(controlsCmp.props).extend(this.controls);
        options.interactions = olInteraction.defaults(interactionsCmp.props).extend(this.interactions);

        options.layers = this.layers;
        options.overlays = this.overlays;

        this.map = new olMap(options);
        this.map.setTarget(options.target || this.mapDiv);
        this.updateFromProps(this.props, /* isMounting = */ true);

        //regitster events
        let olEvents = Util.getEvents(this.events, this.props);
        for (let eventName in olEvents) {
            this.map.on(eventName, olEvents[eventName]);
        }
    }

    private updateCenterAndResolutionFromProps(props: any) {
        const view = this.map.getView();

        // FIXME For standalone usage
        if (props.view && props.view.position && props.view.position.allowUpdate) {
            // The position object has declared that we need to update the map position (allowUpdate).
            // A position object is:
            // {
            //   zoom: Number = Required
            //   extent: ol.Extent = Optional
            //   center: ol.Coordinate = Optional
            // }
            if (typeof props.view.position.extent !== "undefined") {
                view.fit(props.view.position.extent, { size: this.map.getSize(), maxZoom: props.view.position.zoom })
            } else if (typeof props.view.position.center !== "undefined" && typeof props.view.position.zoom !== "undefined") {
                view.setCenter(props.view.position.center)
                view.setZoom(props.view.position.zoom)
            }
        } else if (props.view) {
            // Only used at mount time
            view.setCenter(props.view.center)
            if (typeof props.view.resolution !== "undefined") {
                view.setResolution(props.view.resolution)
            } else if (typeof props.view.zoom !== "undefined") {
                view.setZoom(props.view.zoom)
            }
        }
    }

    private updateFromProps(props: any, isMounting: boolean) {
        if (isMounting || (props.view && props.view.position && props.view.position.allowUpdate)) {
            // Update the center and the resolution of the view only when it is
            // mounted the first time but not when the properties are updated.
            // *Unless* we're passed a position object that explicitly declares
            // that we need to update.
            this.updateCenterAndResolutionFromProps(props)
        }
    }

    // update the view with new props
    /* Modified by Harinder Randhawa */
    componentWillReceiveProps(nextProps: any) {
        this.updateFromProps(nextProps, false)

        // if (this.props.view && nextProps.view.center !== this.props.view.center) {
        //     console.log("map->componentWillReceiveProps->setCenter", nextProps.view.center, this.props.view.center)
        //     this.map.getView().setCenter(nextProps.view.center)
        // }
        // if (this.props.view && nextProps.view.zoom !== this.props.view.zoom) {
        //     console.log("map->componentWillReceiveProps->setZoom", nextProps.view.zoom, this.props.view.zoom)
        //     this.map.getView().setZoom(nextProps.view.zoom)
        // }
    }

    render() {
        console.log("rendering open layer map", this.props);
        return (
            <MapContext.Provider value={this}>
                <div className="openlayers-map" style={this.props.rootStyle} ref={el => (this.mapDiv = el)}>
                    {this.props.children}
                </div>
            </MapContext.Provider>
        )
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
