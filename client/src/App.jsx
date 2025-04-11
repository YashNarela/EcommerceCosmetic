import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router";
import Layout from './Layout';
import Home from './Pages/Home';
import Insert from './Pages/Insert';
import Display from './Pages/Display';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Slice from './Pages/Slice';
import Contact from './Pages/Contact';
import CartItem from './Pages/CartItem';
import Dashboard from './Components/Dashboard/AdminDashboard';
import AddToCart from './Pages/CartItem';
import ItemCard from './Pages/ItemCard';
import DetailImageCard from './Pages/DetailImageCard';
import Board from './Pages/Board';
import CategoryPage from './Pages/CategoryPage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>


        <Routes>

          <Route path='/' element={<Layout />}>

            <Route index element={<Home />} />
          
            <Route path='home' element={<Home />} />
            <Route path='insert' element={<Insert />} />
            <Route path='display' element={<Display />} />
            <Route path='login' element={<Login />} />
            <Route  path='contact' element={<Contact />} />
            <Route path='register' element={<Register />} />
            <Route path='cartitem' element={<CartItem />} />
            <Route path='product/:id' element={<DetailImageCard />} />
            <Route path='category' element={<CategoryPage />} />

            <Route path='/slice' element={<Slice />} />


          </Route>

          <Route path='admin' element={<Dashboard />} />
          <Route path='cart' element={<AddToCart />} />
          <Route path='detailitem' element={<DetailImageCard />} />
          <Route path='itemcard' element={<ItemCard />} />
          <Route path='board' element={<Board />} >
          
            <Route path='cards' element={<CartItem />} />


          </Route>
          


        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
