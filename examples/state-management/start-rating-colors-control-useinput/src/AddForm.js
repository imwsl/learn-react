import React, {useRef, useState} from "react";
import { useInput } from "./UseInput";

export default function AddForm({newColor = f => f}) {
    // store form data
    //const hexTitle = useRef()
    //const hexColor = useRef()

    // const [title, setTitle] = useState("")
    // const [hex, setHex] = useState("#000000")

    const [titleProps, resetTitle] = useInput("")
    const [hexProps, resetHex] = useInput("#000000")

    const submit = e => {
        e.preventDefault()
        // const title = hexTitle.current.value
        // const color = hexColor.current.value;

        newColor(titleProps.value, hexProps.value)

        // setTitle("")
        // setHex("")

        // hexTitle.current.value = ""
        // hexColor.current.value = ""

        resetTitle()
        resetHex()
    }

    return (
        // <form onSubmit={submit}>
        //     <input ref={hexTitle} type="text" placeholder="color" required/>
        //     <input ref={hexColor} type="color" required/>
        //     <button>ADD</button>
        // </form>

        // <form onSubmit={submit}>
        //     <input value={title} 
        //     onChange={event=>setTitle(event.target.value)}
        //     type="text" placeholder="color" required/>
        //     <input value={hex}
        //     onChange={event=>setHex(event.target.value)}
        //     type="color" required/>
        //     <button>ADD</button>
        // </form>

        <form onSubmit={submit}>
            <input 
                {...titleProps}
                type="text"
                placeholder="color name"
                required
            />
            <input
                {...hexProps}
                type="color"
                required
            />
            <button>ADD</button>
        </form>
    )
}