import * as React from "react"
import olControlMousePosition from "ol/control/mouseposition"
import { Util } from "../util"
import { MapContext, Map } from "../map"

class MousePosition extends React.Component<any, any> {
    control: olControlMousePosition

    options: any = {
        className: undefined,
        coordinateFormat: undefined,
        projection: undefined,
        render: undefined,
        target: undefined,
        undefinedHTML: undefined,
    }

    events: any = {
        change: undefined,
        "change:coordinateFormat": undefined,
        "change:projection": undefined,
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
        this.control = new olControlMousePosition(options)
        this.props.mapComp.controls.push(this.control)

        let olEvents = Util.getEvents(this.events, this.props)
        for (let eventName in olEvents) {
            this.control.on(eventName, olEvents[eventName])
        }
    }
}

export default props => <MapContext.Consumer>{mapComp => <MousePosition {...props} mapComp={mapComp} />}</MapContext.Consumer>
