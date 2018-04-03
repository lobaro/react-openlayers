import {default as DoubleClickZoom} from './double-click-zoom';
import {default as DragAndDrop} from './drag-and-drop';
import {default as DragBox} from './drag-box';
import {default as DragPan} from './drag-pan';
import {default as DragRotate} from './drag-rotate';
import {default as DragRotateAndZoom} from './drag-rotate-and-zoom';
import {default as DragZoom} from './drag-zoom';
import {default as Draw} from './draw';
import {default as Extent} from './extent';
import {Interactions} from './interactions';
import {default as KeyboardPan} from './keyboard-pan';
import {default as KeyboardZoom} from './keyboard-zoom';
import {default as Modify} from './modify';
import {default as MouseWheelZoom} from './mouse-wheel-zoom';
import {default as PinchRotate} from './pinch-rotate';
import {default as PinchZoom} from './pinch-zoom';
import {default as Pointer} from './pointer';
import {default as Select} from './select';
import {default as Snap} from './snap';
import {default as Translate} from './translate';

let interaction = {
  DoubleClickZoom: DoubleClickZoom,
  DragAndDrop: DragAndDrop,
  DragBox: DragBox,
  DragPan: DragPan,
  DragRotate: DragRotate,
  DragRotateAndZoom: DragRotateAndZoom,
  DragZoom: DragZoom,
  Draw: Draw,
  Extent: Extent,
  KeyboardPan: KeyboardPan,
  KeyboardZoom: KeyboardZoom,
  Modify: Modify,
  MouseWheelZoom: MouseWheelZoom,
  PinchRotate: PinchRotate,
  PinchZoom: PinchZoom,
  Pointer: Pointer,
  Select: Select,
  Snap: Snap,
  Translate: Translate
};

export {
  Interactions,
  interaction
};

