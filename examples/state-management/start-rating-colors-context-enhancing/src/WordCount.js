import React, { useEffect, useMemo, useCallback } from "react";
import { useAnyKeyToRender } from "./ForceRenderApp";

export function WordCount({children = ""}) {
    useAnyKeyToRender()

    const words = children.split(" ")

    // useMemo 
    const memo_words = useMemo(() => children.split(" "), [children])

    useEffect(() => {
        console.log("WordCount fresh render")
    }, [words])

    useEffect(() => {
        console.log("useMemo fresh render")
    }, [memo_words])

    // 使用useCallback封装
    // useCallback can memorized the values..
    const fn = useCallback(() => {
        console.log("Hello")
        console.log("World")
    }, [])

    useEffect(() => {
        console.log("fn useEffect...")
        fn()
    }, [fn])

    return (<>
        <p>{children}</p>
        <p>
            <strong> {words.length} - words </strong>
        </p>
    </>)
}