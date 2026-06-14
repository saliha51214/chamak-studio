function Hero({ onWatchTutorial }) { // 👈 Yahan humne prop receive kiya
  return (
    <section id="home" style={{
      textAlign: 'center',
      padding: '4rem 2rem',
      backgroundColor: '#FFF5F8'
    }}>

      <span style={{
        background: '#FBEAF0',
        color: '#993556',
        padding: '4px 14px',
        borderRadius: '20px',
        fontSize: '13px'
      }}>
        ✨ New Collection 2026
      </span>

      <h1 style={{
        fontSize: '42px',
        fontFamily: 'serif',
        margin: '1rem 0'
      }}>
        Makeup That Makes <br />
        <span style={{ color: '#D4537E' }}>You Chamakna! 💄</span>
      </h1>

      <p style={{
        color: '#888',
        maxWidth: '400px',
        margin: '0 auto 1.5rem',
        lineHeight: '1.7'
      }}>
        Affordable shades, vibrant vibes, made for every Pakistani girl!
        Let your colors speak for you all day long.
      </p>

      <button onClick={() => window.location.href='#products'} style={{
        background: '#D4537E',
        color: 'white',
        border: 'none',
        padding: '12px 28px',
        borderRadius: '20px',
        fontSize: '15px',
        cursor: 'pointer',
        marginRight: '10px'
      }}>
        Explore Collection
      </button>

      {/* 🛠️ Watch Tutorial Button par function attach kar diya */}
      <button 
        onClick={onWatchTutorial} 
        style={{
          background: 'transparent',
          color: '#D4537E',
          border: '2px solid #D4537E',
          padding: '12px 28px',
          borderRadius: '20px',
          fontSize: '15px',
          cursor: 'pointer'
        }}>
        Watch Tutorial
      </button>

    </section>
  );
}

export default Hero;