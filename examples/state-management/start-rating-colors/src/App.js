import logo from './logo.svg';
import './App.css';
import colorData from './color-data.json'
import ColorList from './ColorList'
import React, {useState} from "react"

function App() {
  const [colors] = useState(colorData)
  return <ColorList colors={colors}/>
}

export default App;
