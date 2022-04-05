import React, {useState} from "react";
import { GithubRepo } from "./GithubRepo";
import { NewGithubUser001 } from "./NewGithubUser";

export default function SearchPanel() {
    const [login, setLogin] = useState("wesley7891")
    const [value, setValue] = useState("wesley7891")
    return (<>
        <div>
            <form onSubmit={(event) => {
                event.preventDefault()
                setLogin(event.target[0].value)
            }}>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="please enter the github user name..."
                />
                <button type="submit">Search</button>
                <button type="button" onClick={() => {
                    setValue("")
                    setLogin("")
                }}>clear</button>
            </form>
        </div>

        <NewGithubUser001 login={login}/>

        <GithubRepo login={login}/>
    </>)
}