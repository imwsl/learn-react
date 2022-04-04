import React, {useState} from "react";
import { NewGithubUser001 } from "./NewGithubUser";

export default function SearchPanel() {
    const [login, setLogin] = useState("moontahoe")

    return (<>
        <div>
            <form>
                <input
                    value={login}
                    type="text"
                    placeholder="please enter the github user name..."
                />
                <button type="sublit" onClick={() => setLogin(login)}>Search</button>
            </form>
        </div>
    </>)
}