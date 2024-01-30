/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Asignacion from './views/Asignacion';
import LoginComponent from './views/Login.JSX';
import Accordion from './views/Contacto';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Asignacion/>}></Route>
        <Route path='/Login' element={<LoginComponent/>}></Route>
        <Route path='/Contacto' element={<Accordion/>}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;