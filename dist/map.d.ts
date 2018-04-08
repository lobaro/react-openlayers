/// <reference types="react" />
import olMap from "ol/map";
import "ol/ol.css";
import * as React from "react";
import "./map.css";
export declare const MapContext: React.Context<{}>;
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
export declare class Map extends React.Component<any, any> {
    map: olMap;
    mapDiv: any;
    layers: any[];
    interactions: any[];
    controls: any[];
    overlays: any[];
    options: any;
    events: any;
    /**
     * Component mounting LifeCycle; constructor, componentDidMount, and render
     * https://facebook.github.io/react/docs/react-component.html#mounting
     */
    constructor(props: any);
    componentDidMount(): void;
    private updateCenterAndResolutionFromProps(props);
    private updateFromProps(props, isMounting);
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
    /**
     * Component Updating LifeCycle
     * https://facebook.github.io/react/docs/react-component.html#updating
     */
    /**
     * Component Unmounting LifeCycle
     * https://facebook.github.io/react/docs/react-component.html#unmounting
     */
    componentWillUnmount(): void;
}
