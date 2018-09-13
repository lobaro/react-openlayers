"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var double_click_zoom_1 = require("./double-click-zoom");
var drag_and_drop_1 = require("./drag-and-drop");
var drag_box_1 = require("./drag-box");
var drag_pan_1 = require("./drag-pan");
var drag_rotate_1 = require("./drag-rotate");
var drag_rotate_and_zoom_1 = require("./drag-rotate-and-zoom");
var drag_zoom_1 = require("./drag-zoom");
var draw_1 = require("./draw");
var extent_1 = require("./extent");
var interactions_1 = require("./interactions");
exports.Interactions = interactions_1.Interactions;
var keyboard_pan_1 = require("./keyboard-pan");
var keyboard_zoom_1 = require("./keyboard-zoom");
var modify_1 = require("./modify");
var mouse_wheel_zoom_1 = require("./mouse-wheel-zoom");
var pinch_rotate_1 = require("./pinch-rotate");
var pinch_zoom_1 = require("./pinch-zoom");
var pointer_1 = require("./pointer");
var select_1 = require("./select");
var snap_1 = require("./snap");
var translate_1 = require("./translate");
var interaction = {
    DoubleClickZoom: double_click_zoom_1.default,
    DragAndDrop: drag_and_drop_1.default,
    DragBox: drag_box_1.default,
    DragPan: drag_pan_1.default,
    DragRotate: drag_rotate_1.default,
    DragRotateAndZoom: drag_rotate_and_zoom_1.default,
    DragZoom: drag_zoom_1.default,
    Draw: draw_1.default,
    Extent: extent_1.default,
    KeyboardPan: keyboard_pan_1.default,
    KeyboardZoom: keyboard_zoom_1.default,
    Modify: modify_1.default,
    MouseWheelZoom: mouse_wheel_zoom_1.default,
    PinchRotate: pinch_rotate_1.default,
    PinchZoom: pinch_zoom_1.default,
    Pointer: pointer_1.default,
    Select: select_1.default,
    Snap: snap_1.default,
    Translate: translate_1.default,
};
exports.interaction = interaction;
//# sourceMappingURL=index.js.map