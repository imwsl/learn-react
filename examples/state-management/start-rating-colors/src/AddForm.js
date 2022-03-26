import React, {useRef} from "react";

export default function AddForm({newColor = f => f}) {
    // store form data
    const hexTitle = useRef()
    const hexColor = useRef()

    const submit = e => {
        e.preventDefault()
        const title = hexTitle.current.value
        const color = hexColor.current.value;

        newColor(title, color)

        hexTitle.current.value = ""
        hexColor.current.value = ""
    }

    return (
        <form onSubmit={submit}>
            <input ref={hexTitle} type="text" placeholder="color" required/>
            <input ref={hexColor} type="color" required/>
            <button>ADD</button>
        </form>
    )
}