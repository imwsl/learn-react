import React from "react";

// 添加一个组件渲染data
export function ListPeaks({data, renderEmpty}) {
    if (!data.length) {
        return (
            <>
                <p>renderEmpty</p>
            </>
        )
    }
    return (
        <>  
            <ul>
                {data.map((item, i) => (
                    <li key={i}>{item.name} - {item.elevation}</li>
                ))}
            </ul>
        </>
    )
}

export function ShortListPeaks({data, renderEmpty}) {
    return !data.length ? 
        (<><p>slp: {renderEmpty}</p></>) : (<>
            <ul>
                {data.map((item, i) => (
                    <li>slp: {item.name} - {item.elevation}</li>
                ))}
            </ul>
        </>)
}