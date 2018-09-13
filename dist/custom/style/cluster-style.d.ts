import olSourceVector from "ol/source/vector";
import olStyleStyle from "ol/style/style";
export declare class ClusterStyle {
    maxFeatureCount: number;
    currentResolution: any;
    source: olSourceVector;
    constructor(vectorSource: olSourceVector);
    vectorStyleFunction: (feature: any, resolution: any) => any;
    selectStyleFunction: (feature: any) => olStyleStyle[];
    private calculateClusterInfo(resolution);
    private createClusterStyle(feature);
}
