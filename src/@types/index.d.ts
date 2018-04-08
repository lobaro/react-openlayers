// Needed until @types/react supports the new React 16.3.0 Context API
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/24509

import * as React from "react"
declare module "react" {
    type Provider<T> = React.ComponentType<{
        value: T
        children?: ReactNode
    }>
    type Consumer<T> = ComponentType<{
        children: (value: T) => ReactNode
        unstable_observedBits?: number
    }>
    interface Context<T> {
        Provider: Provider<T>
        Consumer: Consumer<T>
    }
    function createContext<T>(defaultValue: T, calculateChangedBits?: (prev: T, next: T) => number): Context<T>
    function createRef<T>(): any
}
