import * as React from "react"
import olLayerVector from "ol/layer/vector"
import olLayerVectorTile from "ol/layer/vectortile"
import { Util } from "../util"
import { MapContext, Map } from "../map"

class VectorTile extends React.Component<any, any> {
    layer: olLayerVectorTile

    options: any = {
        renderBuffer: undefined,
        renderMode: undefined,
        renderOrder: undefined,
        extent: undefined,
        minResolution: undefined,
        maxResolution: undefined,
        opacity: undefined,
        preload: undefined,
        source: undefined,
        style: undefined,
        updateWhileAnimating: undefined,
        updateWhileInteracting: undefined,
        visible: undefined,
    }

    events: any = {
        change: undefined,
        "change:extent": undefined,
        "change:maxResolution": undefined,
        "change:minResolution": undefined,
        "change:opacity": undefined,
        "change:preload": undefined,
        "change:source": undefined,
        "change:useInterimTilesOnError": undefined,
        "change:visible": undefined,
        "change:zIndex": undefined,
        postcompose: undefined,
        precompose: undefined,
        propertychange: undefined,
        render: undefined,
    }

    constructor(props) {
        super(props)
    }

    render() {
        return null
    }

    componentDidMount() {
        let options = Util.getOptions(Object.assign(this.options, this.props))
        this.layer = new olLayerVectorTile(options)
        if (this.options.callback) {
            this.options.callback(this.layer)
        }
        if (this.props.zIndex) {
            this.layer.setZIndex(this.props.zIndex)
        }

        this.props.mapComp.layers.push(this.layer)
        // If the map has already been mounted then we need to manually add the layer to the OL Map
        if ("map" in this.props.mapComp) {
            this.props.mapComp.map.addLayer(this.layer)
        }

        let olEvents = Util.getEvents(this.events, this.props)
        for (let eventName in olEvents) {
            this.layer.on(eventName, olEvents[eventName])
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            if ("visible" in nextProps && nextProps.visible !== this.props.visible) {
                this.layer.setVisible(nextProps.visible)
            }
            if ("extent" in nextProps && nextProps.extent !== this.props.extent) {
                this.layer.setExtent(nextProps.extent)
            }
            if ("style" in nextProps && nextProps.style !== this.props.style) {
                this.layer.setStyle(nextProps.style)
            }
            if ("opacity" in nextProps && nextProps.opacity !== this.props.opacity) {
                this.layer.setOpacity(nextProps.opacity)
            }
            if ("properties" in nextProps && nextProps.properties !== undefined) {
                this.layer.setProperties(nextProps.properties, /* opt_silent */ true)
            }
            if ("source" in nextProps && nextProps.source !== this.props.source) {
                this.layer.setSource(nextProps.source)
            }
            if ("zIndex" in nextProps && nextProps.zIndex !== this.props.zIndex) {
                this.layer.setZIndex(nextProps.zIndex)
            }

            // let options = Util.getOptions(Object.assign(this.options, this.props))
            // this.props.mapComp.map.removeLayer(this.layer)
            // this.layer = new olLayerVectorTile(options)
            // if (this.options.callback) {
            //     this.options.callback(this.layer)
            // }
            // if (this.props.zIndex) {
            //     this.layer.setZIndex(this.props.zIndex)
            // }
            // this.props.mapComp.map.addLayer(this.layer)

            // let olEvents = Util.getEvents(this.events, this.props)
            // for (let eventName in olEvents) {
            //     this.layer.on(eventName, olEvents[eventName])
            // }
        }
    }

    componentWillUnmount() {
        this.props.mapComp.map.removeLayer(this.layer)
    }
}

export default props => <MapContext.Consumer>{mapComp => <VectorTile {...props} mapComp={mapComp} />}</MapContext.Consumer>
