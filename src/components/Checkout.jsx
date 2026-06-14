import React, { useState } from 'react';

function Checkout({ cartItems, onBack, onClearCart }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: 'Rawalpindi',
    paymentMethod: 'Cash on Delivery (COD)' // Default choice
  });

  const shippingCharges = 200; // Fixed shipping charges

  // 1. Items ka Sub Total calculate karne ke liye
  const subTotal = cartItems.reduce((sum, item) => {
    const priceNum = parseInt(item.price.replace(/[^\d]/g, '')) || 0;
    return sum + priceNum;
  }, 0);

  // 2. Grand Total (Sub Total + Shipping)
  // Agar cart khali hai to total 0 hoga, warna shipping add hogi
  const grandTotal = subTotal > 0 ? subTotal + shippingCharges : 0;

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      alert('Please fill all the shipping details! 🛍️');
      return;
    }
    
    alert(`🎉 Order Placed Successfully!\n\nThank you ${formData.name}, your order for ${cartItems.length} item(s) has been received.\n\n💵 Sub Total: Rs. ${subTotal.toLocaleString()}\n🚚 Shipping: Rs. ${shippingCharges}\n⭐ Grand Total: Rs. ${grandTotal.toLocaleString()}\n\nSelected Payment: ${formData.paymentMethod}\nDelivery Address: ${formData.address}, ${formData.city}.`);
    
    onClearCart(); // Order ke baad cart khali karne ke liye
    onBack();      // Wapis home page par bhejne ke liye
  }

  return (
    <section style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif', textAlign: 'left' }}>
      
      {/* Back Button */}
      <button onClick={onBack} style={{
        background: 'none', border: '1px solid #D4537E',
        color: '#D4537E', padding: '8px 16px',
        borderRadius: '20px', cursor: 'pointer',
        fontSize: '14px', marginBottom: '2rem', fontWeight: 'bold'
      }}>
        ← Continue Shopping
      </button>

      <h2 style={{ fontFamily: 'serif', fontSize: '28px', color: '#333', marginBottom: '2rem', textAlign: 'center' }}>
        Your Shopping Bag 🛍️
      </h2>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        
        {/* 🛒 Left Side: Items & Detailed Price Summary */}
        <div style={{ flex: 1, minWidth: '300px', background: '#FFF5F8', padding: '1.5rem', borderRadius: '16px', height: 'fit-content' }}>
          <h3 style={{ marginTop: 0, borderBottom: '1px solid #F9A8C9', paddingBottom: '10px', color: '#333' }}>Order Summary</h3>
          
          {cartItems.length === 0 ? (
            <p style={{ color: '#888', textAlign: 'center', padding: '2rem 0' }}>Your bag is empty! Add some Chamak to it. ✨</p>
          ) : (
            <>
              {/* Product List */}
              <div style={{ maxHeight: '240px', overflowY: 'auto', marginBottom: '1rem' }}>
                {cartItems.map((item, index) => (
                  <div key={index} style={{ display: 'flex', gap: '12px', alignItems: 'center', margin: '1rem 0', background: '#fff', padding: '10px', borderRadius: '12px', border: '1px solid #FFEAEA' }}>
                    <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }} />
                    <div style={{ flex: 1 }}>
                      <h4 style={{ margin: '0 0 4px', fontSize: '14px', color: '#333' }}>{item.name}</h4>
                      {item.selectedShade && (
                        <span style={{ fontSize: '11px', background: '#FBEAF0', color: '#993556', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>
                          Shade: {item.selectedShade}
                        </span>
                      )}
                    </div>
                    <span style={{ fontWeight: 'bold', color: '#D4537E', fontSize: '14px' }}>{item.price}</span>
                  </div>
                ))}
              </div>

              {/* Detailed Bill Breakdown */}
              <div style={{ borderTop: '1px solid #F9A8C9', paddingTop: '15px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#555' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Sub Total:</span>
                  <span>Rs. {subTotal.toLocaleString()}</span>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Shipping Charges:</span>
                  <span>Rs. {shippingCharges}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '18px', color: '#333', borderTop: '1px dashed #F9A8C9', paddingTop: '10px', marginTop: '5px' }}>
                  <span>Grand Total:</span>
                  <span style={{ color: '#D4537E' }}>Rs. {grandTotal.toLocaleString()}</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* 📋 Right Side: Shipping Form & Payment Method */}
        <div style={{ flex: 1.2, minWidth: '320px', background: '#fff', border: '1px solid #F9A8C9', padding: '1.5rem', borderRadius: '16px' }}>
          <h3 style={{ marginTop: 0, color: '#993556', marginBottom: '1.5rem' }}>Shipping Details 🚚</h3>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', fontSize: '14px', color: '#333' }}>Full Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #F9A8C9', boxSizing: 'border-box' }} required />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', fontSize: '14px', color: '#333' }}>Phone Number *</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="e.g. 03001234567" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #F9A8C9', boxSizing: 'border-box' }} required />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', fontSize: '14px', color: '#333' }}>Complete Address *</label>
              <textarea name="address" value={formData.address} onChange={handleInputChange} placeholder="House number, Street, Area name" rows="2" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #F9A8C9', boxSizing: 'border-box', fontFamily: 'inherit' }} required />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', fontSize: '14px', color: '#333' }}>City *</label>
              <select name="city" value={formData.city} onChange={handleInputChange} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #F9A8C9', boxSizing: 'border-box', background: '#fff' }}>
                <option value="Rawalpindi">Rawalpindi</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Lahore">Lahore</option>
                <option value="Karachi">Karachi</option>
                <option value="Faisalabad">Faisalabad</option>
                <option value="Peshawar">Peshawar</option>
              </select>
            </div>

            {/* 💳 Payment Methods Option Added Here */}
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', fontSize: '14px', color: '#333' }}>Select Payment Method *</label>
              <select 
                name="paymentMethod" 
                value={formData.paymentMethod} 
                onChange={handleInputChange} 
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #F9A8C9', boxSizing: 'border-box', background: '#fff', fontWeight: '500' }}
              >
                <option value="Cash on Delivery (COD)">💵 Cash on Delivery (COD)</option>
                <option value="Easypaisa / JazzCash">📱 Easypaisa / JazzCash</option>
                <option value="Credit or Debit Card">💳 Credit / Debit Card</option>
              </select>
            </div>

            <button type="submit" disabled={cartItems.length === 0} style={{
              background: cartItems.length === 0 ? '#ccc' : '#D4537E',
              color: 'white', border: 'none', padding: '14px',
              borderRadius: '25px', fontSize: '16px', fontWeight: 'bold',
              cursor: cartItems.length === 0 ? 'not-allowed' : 'pointer',
              marginTop: '1rem', transition: 'background 0.2s', width: '100%'
            }}>
              Place Order 📦
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Checkout;