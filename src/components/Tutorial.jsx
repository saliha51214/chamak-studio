import foundation from '../images/foundation shadessss.jpg';

function Tutorial({ tutorialRef }) {
  
  function watchVideo() {
    window.open('https://youtu.be/usTyGSPNE2g?si=w4tYB0o6-9Kidjxv', '_blank'); 
  }

  return (
    <section ref={tutorialRef} id="tutorials" style={{
      padding: '4rem 2rem',
      textAlign: 'center',
      backgroundColor: '#FFF5F8'
    }}>
      <p style={{ color: '#888', fontSize: '14px', letterSpacing: '1px' }}>LEARN WITH US</p>
      <h2 style={{ fontFamily: 'serif', fontSize: '36px', margin: '0.5rem 0 3rem' }}>
        Complete Daily Makeup Tutorial 🎬
      </h2>

      {/* 🛠️ Main Card: Isko flex bana diya taake image aur text side-by-side aayein */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '24px',
        padding: '2rem',
        maxWidth: '850px', // Thoda wide kiya taake side-by-side fit aaye
        margin: '0 auto',
        boxShadow: '0 4px 20px rgba(212,83,126,0.15)',
        textAlign: 'left',
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
        flexWrap: 'wrap' // Mobile screens par khud-ba-khud upar niche ho jayega
      }}>
        
        {/* 📸 Left Side: Video Image (Iska size ab chota aur perfect kar diya hai) */}
        <div style={{
          borderRadius: '16px',
          width: '320px',    // Width fix kar di
          height: '200px',   // Height kaafi choti kar di taake bada na lage
          overflow: 'hidden',
          position: 'relative',
          cursor: 'pointer',
          flexShrink: 0      // Image ko squeeze hone se bachane ke liye
        }} onClick={watchVideo}>
          <img 
            src={foundation} 
            alt="Daily Makeup Tutorial"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          {/* Play Button Overlay */}
          <div style={{
            position: 'absolute',
            top: '0', left: '0', right: '0', bottom: '0',
            backgroundColor: 'rgba(0,0,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '50%',
              width: '55px',  // Play button thoda chota kiya
              height: '55px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px',
              color: '#D4537E',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              paddingLeft: '4px'
            }}>
              ▶
            </div>
          </div>

          <span style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            background: '#D4537E',
            color: 'white',
            fontSize: '11px',
            fontWeight: 'bold',
            padding: '4px 10px',
            borderRadius: '20px'
          }}>
            15+ min video
          </span>
        </div>

        {/* 📝 Right Side: Video Details */}
        <div style={{ flex: 1, minWidth: '280px' }}>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
            <span style={{
              background: '#E1F5EE', color: '#0F6E56', fontSize: '12px',
              padding: '4px 12px', borderRadius: '12px', fontWeight: '500'
            }}>
              Full Face Guide
            </span>
            <span style={{
              background: '#FFEAEA', color: '#D4537E', fontSize: '12px',
              padding: '4px 12px', borderRadius: '12px', fontWeight: '500'
            }}>
              Beginner Friendly
            </span>
          </div>

          <h3 style={{ margin: '0.5rem 0', fontSize: '22px', fontFamily: 'serif', color: '#000' }}>
            Master Your Everyday Natural Look
          </h3>

          <p style={{ color: '#666', fontSize: '14px', margin: '0 0 1.5rem', lineHeight: '1.6' }}>
            Is single tutorial mein hum cover karenge base preparation, lightweight foundation blending, perfect blush placement, aur ek natural everyday lip shade lagane ka sahi tarika. Chamak Studio ke products use karte hue flawless look banayein!
          </p>

          <button 
            onClick={watchVideo}
            style={{
              display: 'inline-block',
              background: '#D4537E',
              color: 'white',
              border: 'none',
              padding: '10px 24px',
              borderRadius: '30px',
              fontSize: '14px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: '0.3s',
              textAlign: 'center'
            }}>
            ▶ Watch Video
          </button>
        </div>

      </div>
    </section>
  );
}

export default Tutorial;