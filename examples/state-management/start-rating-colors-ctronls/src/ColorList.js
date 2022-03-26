import React from "react";
import Color from "./Color";

export default function ColorList({colors = [], onRemoveColor=f=>f, onSelect=f=>f, newColor=f=>f}) {
    if (!colors.length) return (<div>No Colors Listed</div>)
    return (
        <div>
            {
                colors.map(color => <Color key={color.id} {...color} onRemove={onRemoveColor} onSelect={onSelect} newColor={newColor}/>)
            }
        </div>
    )
}