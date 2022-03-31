import React, {createContext, useState, useContext, useReducer} from 'react';
import colorData from './color-data.json';
import {v4} from 'uuid';

const ColorContext = createContext()

export default function ColorProvider({children}) {
    const [colors, setColors] = useState(colorData)
    
    // 添加相关函数
    //

    // 添加color
    const addColor = (title, hex) => {
        const newColors = [
            {
                id: v4(),
                title: title,
                color:hex,
                rating:0
            },
            ...colors
        ]
        setColors(newColors)
    }
    // 删除color
    const removeColor = id => {
        const newColors = colors.filter(color => color.id !== id)
        setColors(newColors)
    }

    return (
        <ColorContext.Provider value={{colors, addColor, removeColor}}>
            {children}
        </ColorContext.Provider>
    )
}

export const useColors = () => {
    return useContext(ColorContext)
}