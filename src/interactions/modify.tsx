import * as React from "react"
import olInteractionModify from "ol/interaction/modify"
import { Util } from "../util"
import { MapContext, Map } from "../map"

class Modify extends React.Component<any, any> {
    interaction: olInteractionModify

    options: any = {
        condition: undefined,
        deleteCondition: undefined,
        insertVertexCondition: undefined,
        pixelTolerance: undefined,
        style: undefined,
        features: undefined,
        wrapX: undefined,
    }

    events: any = {
        change: undefined,
        "change:active": undefined,
        modifyend: undefined,
        modifystart: undefined,
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
        this.interaction = new olInteractionModify(options)
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
            this.interaction = new olInteractionModify(options)
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

export default props => <MapContext.Consumer>{mapComp => <Modify {...props} mapComp={mapComp} />}</MapContext.Consumer>
