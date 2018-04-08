import * as React from "react"
import olInteractionDragAndDrop from "ol/interaction/draganddrop"
import { Util } from "../util"
import { MapContext, Map } from "../map"

class DragAndDrop extends React.Component<any, any> {
    interaction: olInteractionDragAndDrop

    options: any = {
        formatConstructors: undefined,
        projection: undefined,
        target: undefined,
    }

    events: any = {
        addfeatures: undefined,
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
        console.log("options", options)
        this.interaction = new olInteractionDragAndDrop(options)
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
            this.interaction = new olInteractionDragAndDrop(options)
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

export default props => <MapContext.Consumer>{mapComp => <DragAndDrop {...props} mapComp={mapComp} />}</MapContext.Consumer>
