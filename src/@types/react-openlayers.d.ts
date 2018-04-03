declare module 'react-openlayers/util' {
	export class Util {
	    static getOptions: (props: any) => any;
	    static getEvents: (events?: any, props?: any) => any;
	    static cloneObject: (obj: any) => any;
	    static findChild: (children: any, childType: string) => any;
	}

}
declare module 'react-openlayers/layers/layers' {
	/// <reference types="react" />
	import * as React from 'react';
	export class Layers extends React.Component<any, any> {
	    constructor(props: any);
	    render(): JSX.Element;
	}

}
declare module 'react-openlayers/layers/tile' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/layers/vector' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/layers/heatmap' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/layers/image' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/layers/vector-tile' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/layers/index' {
	/// <reference types="react" />
	import { Layers } from 'react-openlayers/layers/layers';
	import { default as Heatmap } from 'react-openlayers/layers/heatmap';
	import { default as Image } from 'react-openlayers/layers/image';
	import { default as VectorTile } from 'react-openlayers/layers/vector-tile'; let layer: {
	    Tile: (props: any) => JSX.Element;
	    Vector: (props: any) => JSX.Element;
	    Heatmap: (props: any) => JSX.Element;
	    Image: (props: any) => JSX.Element;
	    VectorTile: (props: any) => JSX.Element;
	};
	export { Layers, layer, Heatmap, Image, VectorTile };

}
declare module 'react-openlayers/map' {
	/// <reference types="react" />
	import * as React from 'react';
	import olMap from 'ol/map';
	import 'ol/ol.css';
	import 'react-openlayers/map.css';
	export const MapContext: React.Context<{}>;
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

}
declare module 'react-openlayers/controls/scale-line' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/controls/attribution' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/controls/full-screen' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/controls/mouse-position' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/controls/overview-map' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/controls/rotate' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/controls/zoom-slider' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/controls/zoom-to-extent' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/controls/zoom' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/controls/controls' {
	/// <reference types="react" />
	import * as React from 'react';
	export class Controls extends React.Component<any, any> {
	    options: any;
	    constructor(props: any);
	    render(): JSX.Element;
	    componentDidMount(): void;
	    componentWillUnmount(): void;
	}

}
declare module 'react-openlayers/controls/index' {
	/// <reference types="react" />
	import { Controls } from 'react-openlayers/controls/controls'; let control: {
	    ScaleLine: (props: any) => JSX.Element;
	    Attribution: (props: any) => JSX.Element;
	    FullScreen: (props: any) => JSX.Element;
	    MousePosition: (props: any) => JSX.Element;
	    OverviewMap: (props: any) => JSX.Element;
	    Rotate: (props: any) => JSX.Element;
	    ZoomSlider: (props: any) => JSX.Element;
	    ZoomToExtent: (props: any) => JSX.Element;
	    Zoom: (props: any) => JSX.Element;
	};
	export { Controls, control };

}
declare module 'react-openlayers/interactions/double-click-zoom' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/interactions/drag-and-drop' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/interactions/drag-box' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/interactions/drag-pan' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/interactions/drag-rotate' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/interactions/drag-rotate-and-zoom' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/interactions/drag-zoom' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/interactions/draw' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/interactions/extent' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/interactions/interactions' {
	/// <reference types="react" />
	import * as React from 'react';
	export class Interactions extends React.Component<any, any> {
	    render(): JSX.Element;
	}

}
declare module 'react-openlayers/interactions/keyboard-pan' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/interactions/keyboard-zoom' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/interactions/modify' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/interactions/mouse-wheel-zoom' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/interactions/pinch-rotate' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/interactions/pinch-zoom' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/interactions/pointer' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/interactions/select' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/interactions/snap' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/interactions/translate' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/interactions/index' {
	/// <reference types="react" />
	import { Interactions } from 'react-openlayers/interactions/interactions'; let interaction: {
	    DoubleClickZoom: (props: any) => JSX.Element;
	    DragAndDrop: (props: any) => JSX.Element;
	    DragBox: (props: any) => JSX.Element;
	    DragPan: (props: any) => JSX.Element;
	    DragRotate: (props: any) => JSX.Element;
	    DragRotateAndZoom: (props: any) => JSX.Element;
	    DragZoom: (props: any) => JSX.Element;
	    Draw: (props: any) => JSX.Element;
	    Extent: (props: any) => JSX.Element;
	    KeyboardPan: (props: any) => JSX.Element;
	    KeyboardZoom: (props: any) => JSX.Element;
	    Modify: (props: any) => JSX.Element;
	    MouseWheelZoom: (props: any) => JSX.Element;
	    PinchRotate: (props: any) => JSX.Element;
	    PinchZoom: (props: any) => JSX.Element;
	    Pointer: (props: any) => JSX.Element;
	    Select: (props: any) => JSX.Element;
	    Snap: (props: any) => JSX.Element;
	    Translate: (props: any) => JSX.Element;
	};
	export { Interactions, interaction };

}
declare module 'react-openlayers/overlays/overlays' {
	/// <reference types="react" />
	import * as React from 'react';
	export class Overlays extends React.Component<any, any> {
	    render(): JSX.Element;
	}

}
declare module 'react-openlayers/custom/popup' {
	/// <reference types="react" />
	import * as React from 'react';
	import 'react-openlayers/custom/popup.css';
	export class Popup extends React.Component<any, any> {
	    containerEl: HTMLElement;
	    contentEl: HTMLElement;
	    contentClose: HTMLElement;
	    constructor(props: any);
	    componentDidMount(): void;
	    render(): JSX.Element;
	    setContents(html: any): void;
	    show(bottomDistance?: string): void;
	}

}
declare module 'react-openlayers/custom/google-street-view-panorama' {
	/// <reference types="react" />
	import * as React from 'react';
	export class GoogleStreetViewPanorama extends React.Component<any, any> {
	    streetView: any;
	    constructor(props: any);
	    render(): JSX.Element;
	    initialize(): void;
	    componentDidMount(): void;
	    componentDidUpdate(): void;
	}

}
declare module 'react-openlayers/custom/style/cluster-style' {
	import olSourceVector from 'ol/source/vector';
	export class ClusterStyle {
	    maxFeatureCount: number;
	    currentResolution: any;
	    source: olSourceVector;
	    constructor(vectorSource: olSourceVector);
	    vectorStyleFunction: (feature: any, resolution: any) => any;
	    selectStyleFunction: (feature: any) => any[];
	    private calculateClusterInfo(resolution);
	    private createClusterStyle(feature);
	}

}
declare module 'react-openlayers/custom/style/marker-style' {
	export class MarkerStyle {
	    src: string;
	    constructor(src?: string);
	    style: any;
	    selectStyleFunction: (feature: any) => any;
	}

}
declare module 'react-openlayers/custom/control/geo-coder-control' {
	import olControlControl from "ol/control/control";
	import { GeoCoder } from 'geo-coder';
	import 'react-openlayers/custom/control/geo-coder.css';
	export class GeoCoderControl extends olControlControl {
	    geoCoder: GeoCoder;
	    eventListeners: any;
	    expanded: boolean;
	    buttonEl: HTMLButtonElement;
	    autocompleteEl: HTMLDivElement;
	    getMap: any;
	    constructor(options?: {});
	    on(eventName: string, listener: Function, option?: Object): any;
	    locate: (options: any) => void;
	    toggleExpand: () => void;
	    getButtonHTML(): HTMLButtonElement;
	    getAutocompleteHTML(): HTMLDivElement;
	}

}
declare module 'react-openlayers/custom/control/geo-coder-component' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers/custom/index' {
	/// <reference types="react" />
	import { Popup } from 'react-openlayers/custom/popup';
	import { GoogleStreetViewPanorama } from 'react-openlayers/custom/google-street-view-panorama';
	import { ClusterStyle } from 'react-openlayers/custom/style/cluster-style';
	import { MarkerStyle } from 'react-openlayers/custom/style/marker-style';
	import { GeoCoderControl } from 'react-openlayers/custom/control/geo-coder-control'; let custom: {
	    style: {
	        MarkerStyle: typeof MarkerStyle;
	        ClusterStyle: typeof ClusterStyle;
	    };
	    control: {
	        GeoCoderControl: typeof GeoCoderControl;
	        GeoCoderComponent: (props: any) => JSX.Element;
	    };
	    Popup: typeof Popup;
	    GoogleStreetViewPanorama: typeof GoogleStreetViewPanorama;
	};
	export { custom };

}
declare module 'react-openlayers/overlay' {
	 const _default: (props: any) => JSX.Element;
	export default _default;

}
declare module 'react-openlayers' {
	import { Controls, control } from 'react-openlayers/controls/index';
	import { Interactions, interaction } from 'react-openlayers/interactions/index';
	import { Layers, layer } from 'react-openlayers/layers/index';
	import { Overlays } from 'react-openlayers/overlays/overlays';
	import { custom } from 'react-openlayers/custom/index';
	import { Map } from 'react-openlayers/map';
	import { default as Overlay } from 'react-openlayers/overlay';
	import { Util } from 'react-openlayers/util';
	export { Interactions, Layers, Overlays, Controls, layer, custom, control, interaction, Map, Overlay, Util };

}