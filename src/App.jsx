import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Hola"}/>
      <ItemCount stock = {10} inicial={1}/>
      

    </>
  )
}

export default App
