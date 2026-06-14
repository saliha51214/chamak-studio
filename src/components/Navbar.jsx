import { useState } from 'react';

function Navbar({ cartCount, changePage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  function goTo(page) {
    changePage(page);
    setMenuOpen(false);
  }

  return (
    <nav style={{
      backgroundColor: 'white',
      borderBottom: '1px solid #F9A8C9',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
      }}>

        <div onClick={() => setMenuOpen(!menuOpen)}
          style={{ cursor: 'pointer', fontSize: '22px', color: '#D4537E' }}>
          {menuOpen ? '✕' : '☰'}
        </div>

        {/* Logo par click karne se home screen khulegi */}
        <h1 onClick={() => goTo('home')} style={{
          fontFamily: 'serif',
          fontSize: '22px',
          color: '#D4537E',
          margin: 0,
          letterSpacing: '2px',
          cursor: 'pointer'
        }}>
          CHAMAK STUDIO
        </h1>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span onClick={() => setSearchOpen(!searchOpen)}
            style={{ cursor: 'pointer', fontSize: '20px' }}>
            🔍
          </span>
          
          {/* 🛍️ Shopping Bag Option Active Kar Diya Hai */}
          <div 
            onClick={() => goTo('checkout')} 
            style={{ position: 'relative', cursor: 'pointer' }}
          >
            <span style={{ fontSize: '20px' }}>🛍️</span>
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px', right: '-8px',
                background: '#D4537E',
                color: 'white',
                borderRadius: '50%',
                width: '16px', height: '16px',
                fontSize: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>

      {searchOpen && (
        <div style={{ padding: '0.5rem 2rem 1rem', borderTop: '1px solid #F9A8C9' }}>
          <input
            type="text"
            placeholder="Search products..."
            autoFocus
            style={{
              width: '40%', margin: '0 auto', display: 'block',
              padding: '10px 16px', borderRadius: '20px',
              border: '1.5px solid #F9A8C9', fontSize: '14px',
              outline: 'none', boxSizing: 'border-box'
            }}
          />
        </div>
      )}

      {menuOpen && (
        <>
          <div onClick={() => setMenuOpen(false)}
            style={{
              position: 'fixed', top: 0, left: 0,
              width: '100%', height: '100%',
              backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 998
            }}
          />

          <div style={{
            position: 'fixed', top: 0, left: 0,
            width: '260px', height: '100%',
            backgroundColor: 'white', zIndex: 999,
            boxShadow: '4px 0 20px rgba(0,0,0,0.1)',
            overflowY: 'auto'
          }}>

            <div style={{
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'center', padding: '1.5rem',
              borderBottom: '1px solid #F9A8C9'
            }}>
              <h2 style={{ color: '#D4537E', fontFamily: 'serif', margin: 0, fontSize: '18px' }}>
                CHAMAK STUDIO
              </h2>
              <span onClick={() => setMenuOpen(false)}
                style={{ cursor: 'pointer', fontSize: '20px', color: '#D4537E' }}>
                ✕
              </span>
            </div>

            {/* 🌟 Accessibility Fix: Links ko role="button" de kar keyboard accessible bna dia hai */}
            <ul style={{ listStyle: 'none', margin: 0, padding: '1rem', textAlign: 'left' }}>

              <li style={{ padding: '14px 0', borderBottom: '1px solid #FFEAEA' }}>
                <span role="button" onClick={() => goTo('home')}
                  style={{ textDecoration: 'none', color: '#333', fontSize: '15px', fontWeight: '500', cursor: 'pointer', display: 'block' }}>
                  🏠 Home
                </span>
              </li>

              <li style={{ padding: '14px 0', borderBottom: '1px solid #FFEAEA' }}>
                <span role="button" onClick={() => goTo('products')}
                  style={{ textDecoration: 'none', color: '#333', fontSize: '15px', fontWeight: '500', cursor: 'pointer', display: 'block' }}>
                  🛍️ Shop
                </span>
              </li>

              <li style={{ padding: '14px 0', borderBottom: '1px solid #FFEAEA' }}>
                <span role="button" onClick={() => goTo('about')}
                  style={{ textDecoration: 'none', color: '#333', fontSize: '15px', fontWeight: '500', cursor: 'pointer', display: 'block' }}>
                  💖 About 
                </span>
              </li>

              <li style={{ padding: '14px 0', borderBottom: '1px solid #FFEAEA' }}>
                <span role="button" onClick={() => goTo('login')}
                  style={{ textDecoration: 'none', color: '#333', fontSize: '15px', fontWeight: '500', cursor: 'pointer', display: 'block' }}>
                  👤 Login
                </span>
              </li>

              <li style={{ padding: '14px 0', borderBottom: '1px solid #FFEAEA' }}>
                <span role="button" onClick={() => goTo('bundles')}
                  style={{ textDecoration: 'none', color: '#D4537E', fontSize: '15px', fontWeight: '700', cursor: 'pointer', display: 'block' }}>
                  🎁 Discount Bundles
                </span>
              </li>

            </ul>

            <div style={{ padding: '1.5rem', marginTop: '1rem' }}>
              <button onClick={() => goTo('products')}
                style={{
                  width: '100%', background: '#D4537E',
                  color: 'white', border: 'none',
                  padding: '12px', borderRadius: '20px',
                  fontSize: '14px', cursor: 'pointer', fontWeight: 'bold'
                }}>
                Shop Now 💄
              </button>
            </div>

          </div>
        </>
      )}

    </nav>
  );
}

export default Navbar;