import * as React from "react"
import olControlZoom from "ol/control/zoom"
import { Util } from "../util"
import { MapContext, Map } from "../map"

class Zoom extends React.Component<any, any> {
    control: olControlZoom

    options: any = {
        duration: undefined,
        className: undefined,
        zoomInLabel: undefined,
        zoomOutLabel: undefined,
        zoomInTipLabel: undefined,
        zoomOutTipLabel: undefined,
        delta: undefined,
    }

    events: any = {
        change: undefined,
        propertychange: undefined,
    }

    constructor(props) {
        super(props)
    }

    render() {
        return null
    }

    componentDidMount() {
        let options = Util.getOptions(Object["assign"](this.options, this.props))
        this.control = new olControlZoom(options)
        this.props.mapComp.controls.push(this.control)

        let olEvents = Util.getEvents(this.events, this.props)
        for (let eventName in olEvents) {
            this.control.on(eventName, olEvents[eventName])
        }
    }
}

export default props => <MapContext.Consumer>{mapComp => <Zoom {...props} mapComp={mapComp} />}</MapContext.Consumer>
