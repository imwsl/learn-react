import React from "react";
import { FetchUri } from "./Fetch";

export function NewGithubUser001({login}) {
    const {loading, data, error} = FetchUri(
        `https://api.github.com/users/${login}`
    )

    if (loading) return "Loading the github user...."
    if (error) {
        return <pre>{JSON.stringify(error, null, 2)}</pre>
    }

    return (<>
        <div className="githubUser">
            <img
                src={data.avatar_url}
                alt={data.login}
                style={{style: 200}}
            />
            <div>
               <h1>{data.login}</h1>
               {data.name && <p>{data.name}</p>}
               {data.location && <p>{data.location}</p>} 
            </div>
        </div>
    </>)
}