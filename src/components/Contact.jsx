import { useState } from 'react';
import { supabase } from '../supabaseClient';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  async function handleSend(e) {
    e.preventDefault();
    if (name && email && message) {
      const { error } = await supabase
        .from('contacts')
        .insert([{ name, email, message }]);

      if (error) {
        alert('Error: ' + error.message);
      } else {
        setSent(true);
        setName('');
        setEmail('');
        setMessage('');
      }
    } else {
      alert('Fill all the fields! 😊');
    }
  }

  return (
    <section id="contact" style={{
      padding: '3rem 2rem',
      textAlign: 'center',
      backgroundColor: '#FFF5F8'
    }}>

      <p style={{ color: '#888', fontSize: '14px' }}>Get In Touch</p>
      <h2 style={{ fontFamily: 'serif', fontSize: '32px', margin: '0.5rem 0 1rem' }}>
        Contact Us 📩
      </h2>

      {sent ? (
        <div style={{
          maxWidth: '500px',
          margin: '0 auto',
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '3rem',
          boxShadow: '0 2px 12px rgba(212,83,126,0.1)'
        }}>
          <p style={{ fontSize: '48px', margin: '0 0 1rem' }}>🎉</p>
          <h3 style={{ color: '#D4537E', fontFamily: 'serif' }}>Message Sent Successfully!</h3>
          <p style={{ color: '#888' }}>We will contact you soon 💖</p>
          <button
            onClick={() => setSent(false)}
            style={{
              background: '#D4537E',
              color: 'white',
              border: 'none',
              padding: '10px 24px',
              borderRadius: '20px',
              cursor: 'pointer',
              marginTop: '1rem'
            }}>
            Send it again!
          </button>
        </div>
      ) : (
        <div style={{
          maxWidth: '500px',
          margin: '0 auto',
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 2px 12px rgba(212,83,126,0.1)'
        }}>
          <form onSubmit={handleSend}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: '100%', padding: '12px',
                marginBottom: '1rem', borderRadius: '10px',
                border: '1px solid #F9A8C9', fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%', padding: '12px',
                marginBottom: '1rem', borderRadius: '10px',
                border: '1px solid #F9A8C9', fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />

            <textarea
              name="message"
              placeholder="Type Your Message Here"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                width: '100%', padding: '12px',
                marginBottom: '1rem', borderRadius: '10px',
                border: '1px solid #F9A8C9', fontSize: '14px',
                boxSizing: 'border-box', resize: 'none'
              }}
            />

            <button
              type="submit"
              style={{
                background: '#D4537E', color: 'white',
                border: 'none', padding: '12px 32px',
                borderRadius: '20px', fontSize: '15px',
                cursor: 'pointer', width: '100%'
              }}>
              Send Message 💌
            </button>
          </form>
        </div>
      )}
    </section>
  );
}

export default Contact;