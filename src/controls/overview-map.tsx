import * as React from "react"
import olControlOverviewMap from "ol/control/overviewmap"
import { Util } from "../util"
import { MapContext, Map } from "../map"

class OverviewMap extends React.Component<any, any> {
    control: olControlOverviewMap

    options: any = {
        collapsed: undefined,
        collapseLabel: undefined,
        collapsible: undefined,
        label: undefined,
        layers: undefined,
        render: undefined,
        target: undefined,
        tipLabel: undefined,
        view: undefined,
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
        this.control = new olControlOverviewMap(options)
        this.props.mapComp.controls.push(this.control)

        let olEvents = Util.getEvents(this.events, this.props)
        for (let eventName in olEvents) {
            this.control.on(eventName, olEvents[eventName])
        }
    }
}

export default props => <MapContext.Consumer>{mapComp => <OverviewMap {...props} mapComp={mapComp} />}</MapContext.Consumer>
