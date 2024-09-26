import { useState } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ViewCart from './Cart';
import Header from './Header';
import Demo from './DemoPage';
import Bannertwo from './bannertwo/Bannertwo';
import Category from './Category/Category';
import Footer from './footer/footer'
import AllProducts from './AllProducts/AllProducts';
import AllProductsData from './AllProducts_data/AllProducts_data'
import Layout from './Layout';
import { createContext } from 'react'; 


export const CartContext = createContext(); 

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Header cart={cart} />
          <Routes>
            <Route path='/' element={<Layout />}/> 
            <Route path='Category.jsx' element={<Category />} /> 
            <Route path='/cart.jsx' element={<ViewCart />} /> 
            <Route path='/DemoPage.jsx' element={<Demo/>} /> 
            <Route path='AllProducts.jsx' element={<AllProducts/>}/>
            <Route path='/Bannertwo.jsx' element={<Bannertwo />} /> 
            <Route path='/AllProducts_data.jsx' element={<AllProductsData/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
