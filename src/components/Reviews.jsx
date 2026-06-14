function Reviews() {
 const reviews = [
    { id: 1, name: 'Zara, Lahore', stars: '★★★★★', text: 'The lip color stayed on all day at my cousins wedding! Absolutely love it!' },
    { id: 2, name: 'Hina, Karachi', stars: '★★★★★', text: 'Finally affordable makeup that actually works. The highlighter is amazing!' },
    { id: 3, name: 'Sana, Islamabad', stars: '★★★★☆', text: 'Super fast delivery and the packaging was so cute. Will order again!' },
  ];
  return (
    <section style={{
      padding: '3rem 2rem',
      backgroundColor: '#FFF5F8',
      textAlign: 'center'
    }}>
      <p style={{ color: '#888', fontSize: '14px' }}>Happy Customers</p>
      <h2 style={{ fontFamily: 'serif', fontSize: '32px', margin: '0.5rem 0 2rem' }}>
        What They Say
      </h2>

      <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
        {reviews.map(function(review) {
          return (
            <div key={review.id} style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '1.5rem',
              width: '250px',
              textAlign: 'left',
              boxShadow: '0 2px 12px rgba(212,83,126,0.1)'
            }}>
              <p style={{ color: '#EF9F27', fontSize: '18px', margin: '0 0 0.5rem' }}>
                {review.stars}
              </p>
              <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.6', margin: '0 0 1rem' }}>
                {review.text}
              </p>
              <p style={{ color: '#D4537E', fontWeight: 'bold', fontSize: '13px', margin: 0 }}>
                — {review.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Reviews;