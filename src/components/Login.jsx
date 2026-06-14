import { useState } from 'react';
import { supabase } from '../supabaseClient';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit() {
    setLoading(true);
    setError('');

    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      });
      if (error) {
        setError(error.message);
      } else {
        setDone(true);
      }
    } else {
      const { error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: { data: { full_name: name } }
      });
      if (error) {
        setError(error.message);
      } else {
        setDone(true);
      }
    }
    setLoading(false);
  }

  return (
    <section id="login" style={{
      padding: '3rem 2rem',
      textAlign: 'center',
      backgroundColor: 'white'
    }}>

      <p style={{ color: '#888', fontSize: '14px' }}>Welcome Back</p>
      <h2 style={{ fontFamily: 'serif', fontSize: '32px', margin: '0.5rem 0 1.5rem' }}>
        {isLogin ? 'Login 👤' : 'Sign Up 🌸'}
      </h2>

      {done ? (
        <div style={{
          maxWidth: '400px',
          margin: '0 auto',
          backgroundColor: '#FFF5F8',
          borderRadius: '16px',
          padding: '3rem',
        }}>
          <p style={{ fontSize: '48px', margin: '0 0 1rem' }}>🎉</p>
          <h3 style={{ color: '#D4537E' }}>
            {isLogin ? 'Login Successful!' : 'Account Created!'}
          </h3>
          <p style={{ color: '#888' }}>Welcome to Chamak Studio! 💄</p>
        </div>
      ) : (
        <div style={{
          maxWidth: '400px',
          margin: '0 auto',
          backgroundColor: '#FFF5F8',
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 2px 12px rgba(212,83,126,0.1)'
        }}>

          {error && (
            <p style={{ color: 'red', fontSize: '14px', marginBottom: '1rem' }}>
              {error}
            </p>
          )}

          {!isLogin && (
            <input
              type="text"
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
          )}

          <input
            type="email"
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

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%', padding: '12px',
              marginBottom: '1.5rem', borderRadius: '10px',
              border: '1px solid #F9A8C9', fontSize: '14px',
              boxSizing: 'border-box'
            }}
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              width: '100%', background: '#D4537E',
              color: 'white', border: 'none',
              padding: '12px', borderRadius: '20px',
              fontSize: '15px', cursor: 'pointer',
              marginBottom: '1rem',
              opacity: loading ? 0.7 : 1
            }}>
            {loading ? 'Please wait...' : isLogin ? 'Login 👤' : 'Sign Up 🌸'}
          </button>

          <p
            onClick={() => setIsLogin(!isLogin)}
            style={{ color: '#D4537E', cursor: 'pointer', fontSize: '14px' }}>
            {isLogin ? "Don't have an account? Sign Up!" : "Already have an account? Login!"}
          </p>

        </div>
      )}
    </section>
  );
}

export default Login;