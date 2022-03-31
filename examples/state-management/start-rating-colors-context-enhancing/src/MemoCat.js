import React, {memo} from "react";

function MemoCat({name}) {
    console.log(`Cat component: ${name}`)
    return (
        <p> Cat's name {name}</p>
    )
}

export const PureCat = memo(MemoCat)

// react use the *memo* function a cache the value, 
// when I add a new cat, the render only render the 
// new component.