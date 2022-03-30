import React, {useEffect, useState} from "react";

function useAnyKeyToRender() {
    const [, forceRender] = useState()

    useEffect(() => {
        window.addEventListener('keydown', forceRender)
        return () => window.removeEventListener('keydown', forceRender)
    }, [])
}

export default function ForceRenderApp() {

    useAnyKeyToRender()

    useEffect(() => {
        console.log("keydown render....")
    })

    return (
    <>
        <h1>Any Keydown</h1>
    </>
    )
}