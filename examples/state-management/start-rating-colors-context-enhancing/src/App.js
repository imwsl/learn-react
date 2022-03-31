import logo from './logo.svg';
import './App.css';
import ColorList from './ColorList'
import React, {useState, createContext} from "react"
import AddColorForm from './AddColorForm';
import ColorProvider from './color-hooks';
import CheckBox from './CheckBox'
import FavoritePhrase from './FavoritePhrate';
import ForceRenderApp from './ForceRenderApp';
import { WordCount } from './WordCount';
import CatList from './CatsList';
import Cat from './Cat';
import MemoCatList from './MemoCatList';

function App() {
  return (
    <>
    <ColorProvider>
      <AddColorForm/>
      <ColorList />
      <CheckBox />
      <FavoritePhrase />
      <ForceRenderApp />
      <WordCount>You are not going to believe this but...</WordCount>
      <CatList /> 
      <MemoCatList/>
    </ColorProvider>
  </>
  )
}

export default App;
