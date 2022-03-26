import React, {useContext} from "react";
import { ColorContext } from ".";
import { useInput } from "./UseInput";

export default function AddColorForm({newColor = f => f}) {
   
    const [titleProps, resetTitle] = useInput("")
    const [hexProps, resetHex] = useInput("#000000")

    const colors = useContext(ColorContext)

    const submit = e => {
        e.preventDefault()

        newColor(titleProps.value, hexProps.value)

        resetTitle()
        resetHex()
    }

    return (
        

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
            <button>ADD COLOR</button>
        </form>
    )
}