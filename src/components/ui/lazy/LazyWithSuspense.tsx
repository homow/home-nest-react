import type {ComponentType, LazyExoticComponent} from "react";
import {lazy} from "react";
import SuspenseBoundary from "./SuspenseBoundary";

function LazyWithSuspense(
    importFunc: () => Promise<{ default: ComponentType }>
): ComponentType {
    const Component: LazyExoticComponent<ComponentType> = lazy(importFunc);

    return function Wrapped() {
        return (
            <SuspenseBoundary>
                <Component/>
            </SuspenseBoundary>
        )
    }
}

export default LazyWithSuspense;