import React from 'react'
import Store from './pages/store'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Cart from './pages/Cart';
import Nav from './components/Nav';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App