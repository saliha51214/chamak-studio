import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Login from './components/Login';
import Bundles from './components/Bundles';
import Footer from './components/Footer';
import { supabase } from './supabaseClient';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');

  async function addToCart(product) {
    setCartCount(cartCount + 1);
    setCartItems([...cartItems, product]);

    await supabase.from('orders').insert([{
      product_name: product.name,
      price: product.price,
      user_email: 'guest',
      status: 'pending',
      quantity: 1
    }]);
  }

  function changePage(page) {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }

  function renderPage() {
    if (currentPage === 'login') return <Login />;
    if (currentPage === 'bundles') return <Bundles />;
    if (currentPage === 'products') return <Products addToCart={addToCart} />;
    if (currentPage === 'about') return <About />;
    return (
      <>
        <Hero />
        <Products addToCart={addToCart} />
        <About />
        <Reviews />
        <Contact />
      </>
    );
  }

  return (
    <div>
      <Navbar cartCount={cartCount} changePage={changePage} />
      {renderPage()}
      {currentPage !== 'products' && <Footer />}
    </div>
  );
}

export default App;