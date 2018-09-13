import olStyleStyle from "ol/style/style";
export declare class MarkerStyle {
    src: string;
    constructor(src?: string);
    style: olStyleStyle;
    selectStyleFunction: (feature: any) => olStyleStyle;
}
