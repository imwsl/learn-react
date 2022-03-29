import React, {useState, useEffect} from "react";

export default function FavoritePhrase() {
    const [val, set] = useState("")
    const [phrase, setPhrase] = useState("example phrase")

    // 点击send的时候调用
    const createPhrase = () => {
        setPhrase(val)
        set("")
    }

    // useEffect关联val 和 phrase的值
    useEffect(() => {
        console.log(`typing "${val}"`)
    }, [val])

    useEffect(() => {
        console.log(`saved phrase: "${phrase}"`)
    }, [phrase])

    return (
        <>
            <label>Favorite phrase:</label>
            <input
                value={val}
                placeholder={phrase}
                onChange={e => set(e.target.value)}
            />
            <button onClick={createPhrase}>send</button>
        </>
    )   
}