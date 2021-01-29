import React, {ComponentType, Suspense} from "react"

export function withSuspense<WCP>(WrappedComponent: ComponentType<WCP>) {
    return (props: WCP) => {
        return <Suspense fallback={<div>Loading...</div>}>
            <WrappedComponent {...props} />
        </Suspense>
    }
}