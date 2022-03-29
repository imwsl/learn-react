import React, {useEffect, useState} from "react";

export default function CheckBox() {
    // 定义一个常规的CheckBox, 使用useState存储值
    const [checked, setChecked] = useState(false)
    
    // alert(`add checked : ${checked}`)
    // * alert属于浏览器的api, 它会block掉render的过程
    // * alert放到return 后面，则不会执行alert 
    // * 如果我们想在选然后执行一个函数，但又不影响渲染的过程，该如何操作呢？
    // * 不要执行alert, alert会造成阻塞
    // *useEffect
    useEffect(() => {
        console.log(`add checked : ${checked}`)
    })
    
    
    return (
        <>
            <input
                type="checkbox"
                value={checked}
                onChange={() => setChecked(checked => !checked)}
            />
            {checked ? "checked" : "not checked"}
        </>
    )
}