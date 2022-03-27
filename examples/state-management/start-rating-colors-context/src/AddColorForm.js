import React from "react";
import { useInput } from "./UseInput";
import { useColors } from "./color-hooks";
import {v4} from 'uuid'

export default function AddColorForm() {
   
    const [titleProps, resetTitle] = useInput("")
    const [hexProps, resetHex] = useInput("#000000")
    const {addColor} = useColors()

    const submit = e => {
        e.preventDefault()

        //添加新的color到color list列表
        addColor(titleProps.value, hexProps.value)
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