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