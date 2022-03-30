import React, {useEffect, useState} from "react";

const words = ["One", "Two", "Three"]

export function useAnyKeyToRender() {
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

    useEffect(() => {
        console.log("words array fresh render...")
    }, [words])

    return (
    <>
        <h1>Any Keydown</h1>
    </>
    )
}