import * as React from "react"
import olControlRotate from "ol/control/rotate"
import { Util } from "../util"
import { MapContext, Map } from "../map"

class Rotate extends React.Component<any, any> {
    control: olControlRotate

    options: any = {
        className: undefined,
        label: undefined,
        tipLabel: undefined,
        duration: undefined,
        autoHide: undefined,
        render: undefined,
        resetNorth: undefined,
        target: undefined,
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
        this.control = new olControlRotate(options)
        this.props.mapComp.controls.push(this.control)

        let olEvents = Util.getEvents(this.events, this.props)
        for (let eventName in olEvents) {
            this.control.on(eventName, olEvents[eventName])
        }
    }
}

export default props => <MapContext.Consumer>{mapComp => <Rotate {...props} mapComp={mapComp} />}</MapContext.Consumer>
