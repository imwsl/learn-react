import React, {useEffect, useState} from 'react'
import { loadJSON, saveJSON } from './JSON'

export default function GithubUser({login}) {
    const [data, setData] = useState(loadJSON(`user:${login}`))
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!login) return
        if (data != null && data.login === login) return // if the localstorage saved the data, returns..
        setLoading(true)
        fetch(`https://api.github.com/users/${login}`)
        .then(response => response.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError)
    }, [login])

    useEffect(() => {
        if (!login) return
        if (data == null || data.login === login) return

        const {name, avatar_url, location} = data
        saveJSON(`user:${login}`,
        {name, login, avatar_url, location})
    }, [data])

    if (loading) return <h1>Loading...</h1>
    if (error) {
        return <pre>{JSON.stringify(error, null, 2)}</pre>
    }
    if (data) {
        return <div className='githubUser'>
            <img
                src={data.avatar_url}
                alt={data.login}
                style={{width: 200}}
            />
            <div>
                <h1>{data.login}</h1>
                {data.name && <p>{data.name}</p>}
                {data.location && <p>{data.location}</p>}
            </div>
        </div>
    }

    return null
}