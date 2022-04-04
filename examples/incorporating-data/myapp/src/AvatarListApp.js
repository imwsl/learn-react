import React from "react";

export default function AvatarListApp({data, renderItemFunc}) {
    return (<>
        {data.map((item, i) => (renderItemFunc(item, i)))}
    </>)
}