import React, { useEffect, useState } from "react";
import { useMemoIterator } from "./ArrayIterator";
import { FetchUri } from "./Fetch";
import "./App.css"

export function RepoMenu({
    repos
}) {
    const [{name}, prev, next] = useMemoIterator(repos)
    const [repoName, setRepoName] = useState("")
    const {loading, data, error} = FetchUri(
        ``
    )

    useEffect(() => {
        if (!name) return 
        setRepoName(name)
    }, [name])

    return (
        <>
            <div className="repo">
                <button onClick={prev}>&lt;</button>
                <p>{name}</p>
                <button onClick={next}>&gt;</button>
            </div>        
        </>
    )
}