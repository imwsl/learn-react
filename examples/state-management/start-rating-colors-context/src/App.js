import logo from './logo.svg';
import './App.css';
import ColorList from './ColorList'
import React, {useState, createContext} from "react"
import AddColorForm from './AddColorForm';
import ColorProvider from './color-hooks';

function App() {
  return (
    <>
    <ColorProvider>
      <AddColorForm/>
      <ColorList />
    </ColorProvider>
  </>
  )
}

export default App;
