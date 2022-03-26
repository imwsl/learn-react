import logo from './logo.svg';
import './App.css';
import colorData from './color-data.json'
import ColorList from './ColorList'
import React, {useState, createContext} from "react"
import AddColorForm from './AddColorForm';
import {v4} from 'uuid';

function App() {
  // useState返回colors 和 setColors
  const [colors, setColors] = useState(colorData)
  return (
    <>

<AddColorForm newColor={(title, hex) => {
    const newColors = [
      {
        id: v4(),
        rating: 0,
        title: title,
        color: hex
      },
      ...colors
    ]

    setColors(newColors)
  }}/>

    <ColorList />

  
  </>
  )
}

export default App;
