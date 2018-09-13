import * as React from "react"
import olControlScaleLine from "ol/control/scaleline"
import { Util } from "../util"
import { MapContext, Map } from "../map"

class ScaleLine extends React.Component<any, any> {
    control: olControlScaleLine

    options: any = {
        className: undefined,
        minWidth: undefined,
        render: undefined,
        target: undefined,
        units: undefined,
    }

    events: any = {
        change: undefined,
        "change:units": undefined,
        propertychange: undefined,
    }

    constructor(props) {
        super(props)
    }

    render() {
        return null
    }

    componentDidMount() {
        let options = Util.getOptions(Object.assign(this.options, this.props))
        this.control = new olControlScaleLine(options)
        this.props.mapComp.controls.push(this.control)

        let olEvents = Util.getEvents(this.events, this.props)
        for (let eventName in olEvents) {
            this.control.on(eventName, olEvents[eventName])
        }
    }
}

export default props => <MapContext.Consumer>{mapComp => <ScaleLine {...props} mapComp={mapComp} />}</MapContext.Consumer>
