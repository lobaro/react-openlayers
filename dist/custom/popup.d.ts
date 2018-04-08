/// <reference types="react" />
import * as React from "react";
import "./popup.css";
export declare class Popup extends React.Component<any, any> {
    containerEl: HTMLElement;
    contentEl: HTMLElement;
    contentClose: HTMLElement;
    constructor(props: any);
    componentDidMount(): void;
    render(): JSX.Element;
    setContents(html: any): void;
    show(bottomDistance?: string): void;
}
