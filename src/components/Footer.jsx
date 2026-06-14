function Footer() {
  return (
    <footer style={{
      backgroundColor: '#D4537E',
      color: 'white',
      padding: '2rem',
      textAlign: 'center',
      marginTop: '3rem'
    }}>

      <h2 style={{ fontFamily: 'serif', fontSize: '24px', margin: '0 0 0.5rem' }}>
        Chamak Studio 💄
      </h2>

      <p style={{ fontSize: '14px', margin: '0 0 1rem', opacity: '0.9' }}>
        Affordable makeup for every Pakistani girl!
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1rem' }}>
        <a href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>Instagram</a>
        <a href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>TikTok</a>
        <a href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>WhatsApp</a>
      </div>

      <p style={{ fontSize: '12px', opacity: '0.7', margin: 0 }}>
        © 2026 Chamak Studio. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;