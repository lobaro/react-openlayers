import * as React from "react"
import olControlAttribution from "ol/control/attribution"
import { Util } from "../util"
import { MapContext, Map } from "../map"

class Attribution extends React.Component<any, any> {
    control: olControlAttribution

    options: any = {
        className: undefined,
        target: undefined,
        collapsible: undefined,
        collapsed: undefined,
        tipLabel: undefined,
        label: undefined,
        collapseLabel: undefined,
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
        this.control = new olControlAttribution(options)
        this.props.mapComp.controls.push(this.control)

        let olEvents = Util.getEvents(this.events, this.props)
        for (let eventName in olEvents) {
            this.control.on(eventName, olEvents[eventName])
        }
    }
}

export default props => <MapContext.Consumer>{mapComp => <Attribution {...props} mapComp={mapComp} />}</MapContext.Consumer>
