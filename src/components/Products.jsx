import { useState } from 'react';
import ProductDetail from './ProductDetail';

// 🌟 Images ka path bilkul sahi kar diya hai (../ ke sath)
import lipColor from '../images/lip-color.jpeg';
import highlighter from '../images/highlighter shade.jpeg';
import kajal from '../images/kajal eyeliner duo.webp';
import facePowder from '../images/face powder compact.jpeg';
import lipGloss from '../images/lip glos images.jpeg';
import eyeshadow from '../images/eyeshadow palette.jpeg';
import blush from '../images/powder multi blushes.jpeg';
import foundation from '../images/foundation shadessss.jpg';
import contour from '../images/contour kit makeup.jpeg';
import settingSpray from '../images/setting mist.webp';
function Products({ addToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, image: lipColor, name: 'Velvet Lip Color', desc: 'Long-lasting, 12hr wear', price: 'Rs. 799', badge: '🔥 Hot',
      shades: ['Ruby Red', 'Nude Pink', 'Berry', 'Coral', 'Mauve'],
      features: ['12 hour wear', 'Moisturizing formula', 'Smudge proof', 'Halal certified'] },
    { id: 2, image: highlighter, name: 'Glow Highlighter', desc: 'Blinding glow, 6 shades', price: 'Rs. 649', badge: '🆕 New',
      shades: ['Champagne', 'Rose Gold', 'Bronze', 'Icy Pink', 'Gold', 'Pearl'],
      features: ['Blinding glow', 'Buildable formula', 'Long lasting', 'Suitable for all skin tones'] },
    { id: 3, image: kajal, name: 'Kajal + Liner Duo', desc: 'Smudge-proof, waterproof', price: 'Rs. 499', badge: '🏷️ Sale',
      shades: ['Jet Black', 'Brown', 'Navy'],
      features: ['Waterproof formula', 'Smudge proof', '24hr wear', 'Dermatologically tested'] },
    { id: 4, image: facePowder, name: 'Face Powder', desc: 'Smooth finish, all day wear', price: 'Rs. 599', badge: '🆕 New',
      shades: ['Ivory', 'Beige', 'Sand', 'Caramel', 'Mocha'],
      features: ['Oil control', 'Natural finish', 'All day wear', 'SPF 15'] },
    { id: 5, image: lipGloss, name: 'Lip Gloss', desc: 'Glossy shine, 10 shades', price: 'Rs. 399', badge: '🔥 Hot',
      shades: ['Clear', 'Pink', 'Red', 'Peach', 'Plum', 'Nude', 'Berry', 'Coral', 'Rose', 'Mauve'],
      features: ['High shine formula', 'Moisturizing', 'Non-sticky', 'Vitamin E enriched'] },
    { id: 6, image: eyeshadow, name: 'Eyeshadow Palette', desc: '12 shades, pigmented', price: 'Rs. 1,299', badge: '💎 Premium',
      shades: ['Nude', 'Smoky', 'Glam', 'Natural'],
      features: ['12 highly pigmented shades', 'Blendable formula', 'Long lasting', 'Cruelty free'] },
    { id: 7, image: blush, name: 'Blush', desc: 'Natural flush, 6 shades', price: 'Rs. 549', badge: '🏷️ Sale',
      shades: ['Peach', 'Rose', 'Coral', 'Berry', 'Nude Pink', 'Mauve'],
      features: ['Natural flush finish', 'Buildable coverage', 'Long lasting', 'Smooth texture'] },
    { id: 8, image: foundation, name: 'Foundation', desc: 'Full coverage, 20 shades', price: 'Rs. 1,099', badge: '🔥 Hot',
      shades: ['N10', 'N20', 'N30', 'W10', 'W20', 'W30', 'C10', 'C20'],
      features: ['Full coverage', '24hr wear', 'SPF 30', 'Suitable for all skin types'] },
    { id: 9, image: contour, name: 'Contour Kit', desc: 'Sculpt & define', price: 'Rs. 899', badge: '💎 Premium',
      shades: ['Light', 'Medium', 'Dark'],
      features: ['Contour + highlight', 'Blendable powder', 'Natural finish', 'Easy to use'] },
    { id: 10, image: settingSpray, name: 'Setting Spray', desc: 'Long lasting, 24hr hold', price: 'Rs. 749', badge: '🆕 New',
      shades: ['Original', 'Dewy Finish', 'Matte Finish'],
      features: ['24hr hold', 'Refreshing mist', 'No white cast', 'All skin types'] },
  ];

  function handleQuickAdd(e, product) {
    e.stopPropagation(); 
    if (product.shades && product.shades.length > 0) {
      alert(`Please click on ${product.name} to select your preferred shade first! 💄`);
    } else {
      addToCart(product, null);
    }
  }

  if (selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        onBack={() => setSelectedProduct(null)}
        addToCart={addToCart}
      />
    );
  }

  return (
    <section id="products" style={{ padding: '3rem 2rem', textAlign: 'center' }}>
      <p style={{ color: '#888', fontSize: '14px' }}>Our Bestsellers</p>
      <h2 style={{ fontFamily: 'serif', fontSize: '32px', margin: '0.5rem 0 2rem' }}>
        All Products
      </h2>

      <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {products.map(function(product) {
          return (
            <div key={product.id}
              onClick={() => setSelectedProduct(product)}
              style={{
                border: '1px solid #F9A8C9',
                borderRadius: '16px', padding: '1.5rem',
                width: '200px', textAlign: 'left',
                cursor: 'pointer',
                backgroundColor: '#FFF5F8',
                boxShadow: '0 4px 10px rgba(212,83,126,0.03)',
                transition: 'transform 0.2s'
              }}>
              <div style={{
                height: '160px',
                borderRadius: '12px',
                overflow: 'hidden',
                marginBottom: '1rem',
                background: '#fff'
              }}>
                <img src={product.image} alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{
                background: '#FBEAF0', color: '#993556',
                fontSize: '12px', padding: '3px 10px',
                borderRadius: '10px', display: 'inline-block', marginBottom: '0.5rem'
              }}>
                {product.badge}
              </span>
              <h3 style={{ margin: '0.2rem 0 0.3rem', fontSize: '15px', color: '#333' }}>{product.name}</h3>
              <p style={{ color: '#888', fontSize: '13px', margin: '0 0 1rem', minHeight: '34px' }}>{product.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#D4537E', fontWeight: 'bold' }}>{product.price}</span>
                <button 
                  onClick={(e) => handleQuickAdd(e, product)} 
                  style={{
                    background: '#D4537E', color: 'white',
                    border: 'none', borderRadius: '50%',
                    width: '32px', height: '32px',
                    fontSize: '20px', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Products;