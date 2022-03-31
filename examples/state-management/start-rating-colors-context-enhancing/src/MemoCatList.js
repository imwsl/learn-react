import React, {useState} from "react";
import { PureCat } from "./MemoCat";

export default function MemoCatList() {
    const [cats, setCats] = useState(['Lucy', 'Joe', 'Jarda'])
    return (<>

        {cats.map((name, i) => (
            <PureCat name={name} key={i}/>
        ))}
        <button onClick={() => setCats([...cats, 'Jack'])}>add memo cat</button>
    </>)
}

