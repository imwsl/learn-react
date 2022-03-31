import React from "react";

export default function Cat({name}) {
    console.log(`Cat component: ${name}`)
    return (
        <p> Cat's name {name}</p>
    )
}