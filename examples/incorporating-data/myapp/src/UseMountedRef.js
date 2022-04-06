import { useEffect, useRef } from "react";

// useMountedRef is a hooks, when the components unmounts, 
// the state is wiped clean. mounted.current == false
// * mounted gives the state to start or stop the rendering process...
export function useMountedRef() {
    const mounted = useRef(false)
    useEffect(() => {
        mounted.current = true
        return () => (mounted.current = false)
    })
    return mounted
}