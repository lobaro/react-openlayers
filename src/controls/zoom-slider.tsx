import * as React from "react"
import olControlZoomSlider from "ol/control/zoomslider"
import { Util } from "../util"
import { MapContext, Map } from "../map"

class ZoomSlider extends React.Component<any, any> {
    control: olControlZoomSlider

    options: any = {
        duration: undefined,
        className: undefined,
        maxResolution: undefined,
        minResolution: undefined,
        render: undefined,
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
        this.control = new olControlZoomSlider(options)
        this.props.mapComp.controls.push(this.control)

        let olEvents = Util.getEvents(this.events, this.props)
        for (let eventName in olEvents) {
            this.control.on(eventName, olEvents[eventName])
        }
    }
}

export default props => <MapContext.Consumer>{mapComp => <ZoomSlider {...props} mapComp={mapComp} />}</MapContext.Consumer>
