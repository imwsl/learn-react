import React, { useEffect, useState } from "react";
import { useMemoIterator } from "./ArrayIterator";
import { FetchUri } from "./Fetch";
import ReactMarkdown from 'react-markdown';
import { Buffer } from "buffer";
import "./App.css"

export function RepoMenu({
    repos,
    login
}) {
    const [{name}, prev, next] = useMemoIterator(repos)
    const [repoName, setRepoName] = useState("")
    const [url, setUrl] = useState("")
    const [markdown, setMarkdown] = useState("")

    const {loading, data, error} = FetchUri(
        url
    )

    useEffect(() => {
        if (!name) return 
        setRepoName(name)

        let url = `https://api.github.com/repos/${login}/${name}/readme`
        setUrl(url)
    }, [name])

    useEffect(() => {
        if (!data) {
            setMarkdown("#this is no readme!!")
            return
        }
        setMarkdown(Buffer.from(data.content, 'base64').toString('utf-8'))
    }, [data])

    return (
        <>
            <div className="repo">
                <button onClick={prev}>&lt;</button>
                <p>{name}</p>
                <button onClick={next}>&gt;</button>
            </div>  
            <div className="readme">
                <ReactMarkdown children={markdown}/>
            </div>      
        </>
    )
}