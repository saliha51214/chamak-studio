import React, { useState } from 'react';

function ProductDetail({ product, onBack, addToCart }) {
  // State jo click kiye gaye shade ko yaad rakhegi
  const [selectedShade, setSelectedShade] = useState(null);

  // ✨ Yahan par humne update kiya hai taake selectedShade sath add ho saku
  function handleAddToCart() {
    if (product.shades && !selectedShade) {
      alert('Please select a shade first! 💄');
      return;
    }
    
    // Pure product data ke sath selectedShade ko attach kar ke bhej rhe hain
    addToCart({ ...product, selectedShade: selectedShade });
    alert(`${product.name} (${selectedShade || 'Standard'}) added to Bag! 🛍️`);
  }

  return (
    <section style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>

      {/* Back Button */}
      <button onClick={onBack} style={{
        background: 'none', border: '1px solid #D4537E',
        color: '#D4537E', padding: '8px 16px',
        borderRadius: '20px', cursor: 'pointer',
        fontSize: '14px', marginBottom: '2rem'
      }}>
        ← Back to Products
      </button>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>

        {/* Product Image Box */}
        <div style={{
          background: '#FFF5F8', 
          borderRadius: '16px',
          padding: '1rem', 
          width: '300px',
          height: '350px',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(212,83,126,0.05)'
        }}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '12px'
            }}
          />
        </div>

        {/* Product Info */}
        <div style={{ flex: 1, minWidth: '250px' }}>

          <span style={{
            background: '#FBEAF0', color: '#993556',
            fontSize: '12px', padding: '4px 12px',
            borderRadius: '10px'
          }}>
            {product.badge}
          </span>

          <h1 style={{ fontFamily: 'serif', fontSize: '28px', margin: '0.8rem 0 0.5rem' }}>
            {product.name}
          </h1>

          <p style={{ color: '#888', fontSize: '15px', marginBottom: '1rem' }}>
            {product.desc}
          </p>

          <p style={{ color: '#D4537E', fontSize: '24px', fontWeight: 'bold', margin: '0 0 1.5rem' }}>
            {product.price}
          </p>

          {/* 💄 Shades Selection UI */}
          {product.shades && (
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontWeight: '500', marginBottom: '0.5rem' }}>
                Select Shade: {selectedShade && <span style={{ color: '#D4537E', fontWeight: 'bold' }}>({selectedShade})</span>}
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {product.shades.map(function(shade, i) {
                  const isSelected = selectedShade === shade;

                  return (
                    <span 
                      key={i} 
                      onClick={() => setSelectedShade(shade)}
                      style={{
                        // Click karne par pink background aur white text ho jayega
                        background: isSelected ? '#D4537E' : '#FFF5F8',
                        color: isSelected ? 'white' : '#333',
                        border: isSelected ? '1px solid #D4537E' : '1px solid #F9A8C9',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '13px',
                        cursor: 'pointer',
                        fontWeight: isSelected ? 'bold' : 'normal',
                        transition: 'all 0.2s ease',
                        boxShadow: isSelected ? '0 2px 8px rgba(212,83,126,0.3)' : 'none'
                      }}
                    >
                      {shade}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          {/* Features */}
          {product.features && (
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontWeight: '500', marginBottom: '0.5rem' }}>Key Features:</p>
              <ul style={{ paddingLeft: '1.2rem', color: '#555', fontSize: '14px', lineHeight: '1.8' }}>
                {product.features.map(function(f, i) {
                  return <li key={i}>{f}</li>;
                })}
              </ul>
            </div>
          )}

          <button onClick={handleAddToCart} style={{
            background: '#D4537E', color: 'white',
            border: 'none', padding: '12px 32px',
            borderRadius: '20px', fontSize: '16px',
            cursor: 'pointer', width: '100%',
            fontWeight: 'bold'
          }}>
            Add to Cart 🛍️
          </button>

        </div>
      </div>
    </section>
  );
}

export default ProductDetail;