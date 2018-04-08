/// <reference types="react" />
import { Layers } from "./layers";
import { default as Heatmap } from "./heatmap";
import { default as Image } from "./image";
import { default as VectorTile } from "./vector-tile";
declare let layer: {
    Tile: (props: any) => JSX.Element;
    Vector: (props: any) => JSX.Element;
    Heatmap: (props: any) => JSX.Element;
    Image: (props: any) => JSX.Element;
    VectorTile: (props: any) => JSX.Element;
};
export { Layers, layer, Heatmap, Image, VectorTile };
