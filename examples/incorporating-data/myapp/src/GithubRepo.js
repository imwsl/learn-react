import React from "react";
import { FetchUri } from "./Fetch";
import { RepoMenu } from "./RepoMenu";

export function GithubRepo({login}) {
    const {loading, data, error} = FetchUri(
        `https://api.github.com/users/${login}/repos`
    )

    if (loading) return "Loading the github user...."
    if (error) {
        return <pre>{JSON.stringify(error, null, 2)}</pre>
    }

    return (<>
        <RepoMenu repos={data} login={login}/>
    </>)
}