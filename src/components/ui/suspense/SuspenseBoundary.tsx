import type {ReactNode, JSX} from "react";
import {Suspense} from 'react'
import Loading from "../Loading";

type Props = {
    children?: ReactNode,
    fallback?: ReactNode
}

export default function SuspenseBoundary({children, fallback}: Props): JSX.Element {
    return (
        <Suspense
            fallback={
                fallback ||
                <Loading
                    msg={"در حال بارگذاری"}
                />
            }
        >
            {children}
        </Suspense>
    )
};