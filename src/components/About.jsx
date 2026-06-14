function About() {
  return (
    <section id="about" style={{
      padding: '3rem 2rem',
      textAlign: 'center',
      backgroundColor: 'white'
    }}>

      <p style={{ color: '#888', fontSize: '14px' }}>Our Story</p>
      <h2 style={{ fontFamily: 'serif', fontSize: '32px', margin: '0.5rem 0 1rem' }}>
        About Chamak Studio 💄
      </h2>

      <p style={{
        color: '#555',
        fontSize: '15px',
        maxWidth: '600px',
        margin: '0 auto 2rem',
        lineHeight: '1.8'
      }}>
        Chamak Studio began with one clear vision 🌸
        to make affordable and quality makeup accessible for every girl in Pakistan.
        Because beauty belongs to everyone, not just a few 💄
      </p>

      <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>

        <div style={{
          backgroundColor: '#FFF5F8',
          borderRadius: '16px',
          padding: '1.5rem',
          width: '180px'
        }}>
          <p style={{ fontSize: '32px', margin: '0 0 0.5rem' }}>🌸</p>
          <h3 style={{ color: '#D4537E', margin: '0 0 0.5rem' }}>100%</h3>
          <p style={{ color: '#888', fontSize: '13px', margin: 0 }}>Cruelty Free</p>
        </div>

        <div style={{
          backgroundColor: '#FFF5F8',
          borderRadius: '16px',
          padding: '1.5rem',
          width: '180px'
        }}>
          <p style={{ fontSize: '32px', margin: '0 0 0.5rem' }}>✅</p>
          <h3 style={{ color: '#D4537E', margin: '0 0 0.5rem' }}>Halal</h3>
          <p style={{ color: '#888', fontSize: '13px', margin: 0 }}>Certified</p>
        </div>

        <div style={{
          backgroundColor: '#FFF5F8',
          borderRadius: '16px',
          padding: '1.5rem',
          width: '180px'
        }}>
          <p style={{ fontSize: '32px', margin: '0 0 0.5rem' }}>🚚</p>
          <h3 style={{ color: '#D4537E', margin: '0 0 0.5rem' }}>Fast</h3>
          <p style={{ color: '#888', fontSize: '13px', margin: 0 }}>Delivery</p>
        </div>

        <div style={{
          backgroundColor: '#FFF5F8',
          borderRadius: '16px',
          padding: '1.5rem',
          width: '180px'
        }}>
          <p style={{ fontSize: '32px', margin: '0 0 0.5rem' }}>💰</p>
          <h3 style={{ color: '#D4537E', margin: '0 0 0.5rem' }}>Affordable</h3>
          <p style={{ color: '#888', fontSize: '13px', margin: 0 }}>Prices</p>
        </div>

      </div>
    </section>
  );
}

export default About;