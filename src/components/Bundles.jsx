import React from 'react';
// 🛠️ Aapki screenshot ke mutabiq sahi images import kar li hain
import firstBundle from '../images/1st bundle.png';
import secondBundle from '../images/2nd bund.png';
import thirdBundle from '../images/3rd bund.png';

function Bundles() {
  const bundles = [
    {
      id: 1,
      name: 'Starter Kit',
      image: firstBundle, // Emoji ki jagah real image path
      desc: 'Perfect for beginners!',
      items: ['Velvet Lip Color', 'Kajal + Liner', 'Face Powder'],
      price: 'Rs. 1,499',
      oldPrice: 'Rs. 2,100',
      discount: '30% OFF'
    },
    {
      id: 2,
      name: 'Glam Bundle',
      image: secondBundle, // Emoji ki jagah real image path
      desc: 'Full glam look in one kit!',
      items: ['Glow Highlighter', 'Eyeshadow Palette', 'Lip Gloss', 'Blush'],
      price: 'Rs. 2,299',
      oldPrice: 'Rs. 3,500',
      discount: '35% OFF'
    },
    {
      id: 3,
      name: 'Bridal Bundle',
      image: thirdBundle, // Emoji ki jagah real image path
      desc: 'Complete bridal look!',
      items: ['Foundation', 'Contour Kit', 'Lip Color', 'Highlighter', 'Setting Spray'],
      price: 'Rs. 3,999',
      oldPrice: 'Rs. 6,000',
      discount: '40% OFF'
    },
  ];

  return (
    <section id="bundles" style={{
      padding: '3rem 2rem',
      textAlign: 'center',
      backgroundColor: '#FFF5F8'
    }}>

      <p style={{ color: '#888', fontSize: '14px' }}>Special Deals</p>
      <h2 style={{ fontFamily: 'serif', fontSize: '32px', margin: '0.5rem 0 0.5rem' }}>
        Discount Bundles 🎁
      </h2>
      <p style={{ color: '#888', fontSize: '14px', marginBottom: '2rem' }}>
        Save more when you buy together!
      </p>

      <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {bundles.map(function(bundle) {
          return (
            <div key={bundle.id} style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '1.5rem',
              width: '240px',
              textAlign: 'left',
              boxShadow: '0 2px 12px rgba(212,83,126,0.1)',
              position: 'relative'
            }}>

              {/* Discount Badge */}
              <span style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: '#D4537E',
                color: 'white',
                fontSize: '11px',
                padding: '4px 8px',
                borderRadius: '10px',
                fontWeight: 'bold',
                zIndex: '1' // Badge ko image ke upar rakhne ke liye
              }}>
                {bundle.discount}
              </span>

              {/* 📸 Emoji Box ko Real Image Container se replace kar diya */}
              <div style={{
                width: '100%',
                height: '150px',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#FFF5F8',
                marginBottom: '1rem'
              }}>
                <img 
                  src={bundle.image} 
                  alt={bundle.name} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover' // Image ko crop kar ke container me fit rakhega
                  }}
                />
              </div>

              <h3 style={{ margin: '0 0 0.3rem', fontSize: '18px', color: '#333' }}>
                {bundle.name}
              </h3>
              <p style={{ color: '#888', fontSize: '13px', margin: '0 0 0.8rem' }}>
                {bundle.desc}
              </p>

              {/* Items List */}
              <ul style={{ padding: '0 0 0 1rem', margin: '0 0 1rem', color: '#555', fontSize: '13px' }}>
                {bundle.items.map(function(item, index) {
                  return <li key={index}>{item}</li>;
                })}
              </ul>

              {/* Price */}
              <div style={{ marginBottom: '1rem' }}>
                <span style={{
                  color: '#aaa',
                  fontSize: '13px',
                  textDecoration: 'line-through',
                  marginRight: '8px'
                }}>
                  {bundle.oldPrice}
                </span>
                <span style={{ color: '#D4537E', fontWeight: 'bold', fontSize: '18px' }}>
                  {bundle.price}
                </span>
              </div>

              <button style={{
                width: '100%',
                background: '#D4537E',
                color: 'white',
                border: 'none',
                padding: '10px',
                borderRadius: '20px',
                fontSize: '14px',
                cursor: 'pointer'
              }}>
                Add to Cart 🛍️
              </button>

            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Bundles;