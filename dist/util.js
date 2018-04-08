"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function getOptions(props) {
    var options = {};
    for (var key in props) {
        if (key !== "children" &&
            key !== "mapComp" && // Exclude our React.createContext mapComp prop
            typeof props[key] !== "undefined" && //exclude undefined ones
            !key.match(/^on[A-Z]/) //exclude events
        ) {
            options[key] = props[key];
        }
    }
    return options;
}
function getPropsKey(eventName) {
    return ("on" +
        eventName
            .replace(/(\:[a-z])/g, function ($1) { return $1.toUpperCase(); })
            .replace(/^[a-z]/, function ($1) { return $1.toUpperCase(); })
            .replace(":", ""));
}
function getEvents(events, props) {
    if (events === void 0) { events = {}; }
    if (props === void 0) { props = {}; }
    var prop2EventMap = {};
    for (var key in events) {
        prop2EventMap[getPropsKey(key)] = key;
    }
    var ret = {};
    for (var propName in props) {
        var eventName = prop2EventMap[propName];
        var prop = props[propName];
        if (typeof prop !== "undefined" && propName.match(/^on[A-Z]/) && eventName) {
            ret[eventName] = prop;
        }
    }
    return ret;
}
var typeOf = function (obj) {
    return {}.toString
        .call(obj)
        .match(/\s([a-zA-Z]+)/)[1]
        .toLowerCase();
};
function cloneObject(obj) {
    var type = typeOf(obj);
    if (type == "object" || type == "array") {
        if (obj.clone) {
            return obj.clone();
        }
        var clone = type == "array" ? [] : {};
        for (var key in obj) {
            clone[key] = cloneObject(obj[key]);
        }
        return clone;
    }
    return obj;
}
function findChild(children, childType) {
    var found;
    var childrenArr = React.Children.toArray(children);
    for (var i = 0; i < childrenArr.length; i++) {
        var child = childrenArr[i];
        if (child.type.name == childType) {
            found = child;
            break;
        }
    }
    return found;
}
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.getOptions = getOptions;
    Util.getEvents = getEvents;
    Util.cloneObject = cloneObject;
    Util.findChild = findChild;
    return Util;
}());
exports.Util = Util;
//# sourceMappingURL=util.js.map