import React, {useState} from "react";
import Cat from "./Cat";

export default function CatList() {
    const [cats, setCats] = useState(['Ripple', 'Fox', 'Rain'])

    return (
        <>
            {cats.map((name, i) => {
                return <Cat key={i} name={name}/> // notice, use {} need return ...
            })}

            <button onClick={() => setCats([...cats, 'Joy'])}>add</button>
        </>
    )
}

// add a new cat, the CatList will render again