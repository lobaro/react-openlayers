import * as React from "react"
import olInteractionPointer from "ol/interaction/pointer"
import { Util } from "../util"
import { MapContext, Map } from "../map"

class Pointer extends React.Component<any, any> {
    interaction: olInteractionPointer

    options: any = {
        handleDownEvent: undefined,
        handleDragEvent: undefined,
        handleEvent: undefined,
        handleMoveEvent: undefined,
        handleUpEvent: undefined,
    }

    events: any = {
        change: undefined,
        "change:active": undefined,
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
        this.interaction = new olInteractionPointer(options)
        this.props.mapComp.interactions.push(this.interaction)

        let olEvents = Util.getEvents(this.events, this.props)
        for (let eventName in olEvents) {
            this.interaction.on(eventName, olEvents[eventName])
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.props.mapComp.map.removeInteraction(this.interaction)
            let options = Util.getOptions(Object["assign"](this.options, nextProps))
            this.interaction = new olInteractionPointer(options)
            this.props.mapComp.map.addInteraction(this.interaction)

            let olEvents = Util.getEvents(this.events, this.props)
            for (let eventName in olEvents) {
                this.interaction.on(eventName, olEvents[eventName])
            }
        }
    }

    componentWillUnmount() {
        this.props.mapComp.map.removeInteraction(this.interaction)
    }
}

export default props => <MapContext.Consumer>{mapComp => <Pointer {...props} mapComp={mapComp} />}</MapContext.Consumer>
