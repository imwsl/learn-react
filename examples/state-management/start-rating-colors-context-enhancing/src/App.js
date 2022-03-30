import logo from './logo.svg';
import './App.css';
import ColorList from './ColorList'
import React, {useState, createContext} from "react"
import AddColorForm from './AddColorForm';
import ColorProvider from './color-hooks';
import CheckBox from './CheckBox'
import FavoritePhrase from './FavoritePhrate';
import ForceRenderApp from './ForceRenderApp';

function App() {
  return (
    <>
    <ColorProvider>
      <AddColorForm/>
      <ColorList />
      <CheckBox />
      <FavoritePhrase />
      <ForceRenderApp />
    </ColorProvider>
  </>
  )
}

export default App;
