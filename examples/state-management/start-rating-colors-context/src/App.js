import logo from './logo.svg';
import './App.css';
import colorData from './color-data.json'
import ColorList from './ColorList'
import React, {useState} from "react"
import AddColorForm from './AddColorForm';
import {v4} from 'uuid';

function App() {
  // useState返回colors 和 setColors
  const [colors, setColors] = useState(colorData)
  return (
    <>
    <ColorList colors={colors} onRemoveColor={id => {
    const newColors = colors.filter(color => color.id != id)
    setColors(newColors)
  }} onSelect={(id, i) => {
    console.log(` id => ${id} i => ${i}`)
    const newColors = colors.map(color => {
      if (color.id === id) {
        color.rating = i
      }
      return color
    })
    setColors(newColors)
  }} newColor={(id, title, hex) => {
    console.log(`her ${id} ${title} ${hex}`)
    const newColors = colors.map(color => {
      if (color.id === id) {
        color.title = title
        color.color = hex
      }
      return color
    })
    setColors(newColors)
  }}/>

  <AddColorForm newColor={(title, hex) => {
    const newColors = [
      ...colors,
      {
        id: v4(),
        rating: 0,
        title: title,
        color: hex
      }
    ]

    setColors(newColors)
  }}/>
  </>
  )
}

export default App;
