import React, {useState} from "react";

export default function CheckBox() {
    // 定义一个常规的CheckBox, 使用useState存储值
    const [checked, setChecked] = useState(false)

    alert(`checked: ${checked.toString()}`)

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