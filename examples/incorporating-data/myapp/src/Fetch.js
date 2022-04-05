import React, {useEffect, useState} from "react";

export function FetchUri(uri) {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    console.log("fetchuri...")

    useEffect(()=>{
        console.log(`fetch uri => ${uri}`)
        if (!uri) return 
        fetch(uri)
            .then(data => data.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError)
    }, [uri])   // moniter the uri, and do http request...

    return {
        loading,
        data,
        error
    }
}

export function FetchUriComponent({
    uri,
    renderSucc,
    loadingFallback=<p>Loading...</p>,
    renderError = error => (
        <pre>JSON.stringify(error, null, 2)</pre>
    )
}) {
    console.log(`FetchUriComponent uri ${uri}`)
    const {loading, data, error} = FetchUri(uri)
    if (loading) return loadingFallback
    if (error) return renderError(error)
    if (data) return renderSucc({data})
}