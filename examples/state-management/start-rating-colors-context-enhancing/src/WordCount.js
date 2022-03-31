import React, { useEffect, useMemo, useCallback, useLayoutEffect, useReducer} from "react";
import { useAnyKeyToRender } from "./ForceRenderApp";

function mousePosition({x, y}) {
    console.log(`my mouse position ${x}, ${y}`)
}

export function WordCount({children = ""}) {

    const [checked, toggle] = useReducer(checked => !checked, false)
    const [number, setNumber] = useReducer((number, newNumber) => number + newNumber, 0)

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

    // window.addEventListener("mousemove", function(e){
    //     console.log("mouse move....")
    // })

    // useLayoutEffect invokes before useEffect
    // we can do some front works
    useLayoutEffect(() => {
        console.log("useLayoutEffect call once...")
        window.addEventListener("mousemove", mousePosition)
        return () => window.removeEventListener("mousemove", mousePosition)
    }, [])

    return (<>
        <p>{children}</p>
        <p>
            <strong> {words.length} - words </strong>
        </p>
        <input type="checkbox" value={checked} onChange={toggle}/>
        <p>{checked ? "Checked" : "Not Checked"}</p>

        <h1 onClick={() => setNumber(30)}>{number}</h1>
    </>)
}