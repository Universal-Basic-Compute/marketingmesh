"use client";

import { useState, useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  const router = useRouter();
  const searchParams = useSearchParams();
  const registered = searchParams?.get('registered');
  
  useEffect(() => {
    if (registered) {
      setSuccessMessage('Account created successfully! Please log in.');
    }
  }, [registered]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset error
    setError('');
    setSuccessMessage('');
    
    // Validate form
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }
    
    try {
      setLoading(true);
      
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      
      if (result?.error) {
        throw new Error(result.error || 'Invalid email or password');
      }
      
      // Redirect to dashboard on success
      router.push('/dashboard');
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.message || 'An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      minHeight: '100vh', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '3rem 1rem',
      backgroundColor: '#0a0a0a'
    }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '28rem', 
        marginBottom: '2rem' 
      }}>
        <div>
          <h2 style={{ 
            marginTop: '1.5rem', 
            textAlign: 'center', 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            letterSpacing: '-0.025em', 
            color: 'white' 
          }}>
            Sign in to your account
          </h2>
          <p style={{ 
            marginTop: '0.5rem', 
            textAlign: 'center', 
            fontSize: '0.875rem', 
            color: '#a0aec0' 
          }}>
            Or{' '}
            <Link href="/register" style={{ 
              fontWeight: '500', 
              color: '#3dd5c8',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }} onMouseOver={(e) => e.currentTarget.style.color = 'rgba(61, 213, 200, 0.9)'} onMouseOut={(e) => e.currentTarget.style.color = '#3dd5c8'}>
              create a new account
            </Link>
          </p>
        </div>
        
        {error && (
          <div style={{ 
            backgroundColor: 'rgba(239, 68, 68, 0.1)', 
            border: '1px solid rgb(239, 68, 68)', 
            color: 'rgb(239, 68, 68)', 
            padding: '0.75rem 1rem', 
            borderRadius: '0.375rem', 
            marginTop: '1rem' 
          }} role="alert">
            <span>{error}</span>
          </div>
        )}
        
        {successMessage && (
          <div style={{ 
            backgroundColor: 'rgba(34, 197, 94, 0.1)', 
            border: '1px solid rgb(34, 197, 94)', 
            color: 'rgb(34, 197, 94)', 
            padding: '0.75rem 1rem', 
            borderRadius: '0.375rem', 
            marginTop: '1rem' 
          }} role="alert">
            <span>{successMessage}</span>
          </div>
        )}
        
        <form style={{ marginTop: '2rem' }} onSubmit={handleSubmit}>
          <div style={{ 
            borderRadius: '0.375rem', 
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' 
          }}>
            <div>
              <label htmlFor="email-address" style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                style={{ 
                  display: 'block', 
                  width: '100%', 
                  borderTopLeftRadius: '0.375rem', 
                  borderTopRightRadius: '0.375rem', 
                  border: '0', 
                  padding: '0.75rem 1rem', 
                  backgroundColor: '#111111', 
                  color: 'white', 
                  outline: 'none',
                  marginBottom: '1px'
                }}
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                style={{ 
                  display: 'block', 
                  width: '100%', 
                  borderBottomLeftRadius: '0.375rem', 
                  borderBottomRightRadius: '0.375rem', 
                  border: '0', 
                  padding: '0.75rem 1rem', 
                  backgroundColor: '#111111', 
                  color: 'white', 
                  outline: 'none' 
                }}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            marginTop: '1.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                style={{ 
                  height: '1rem', 
                  width: '1rem', 
                  borderRadius: '0.25rem',
                  accentColor: '#3dd5c8'
                }}
              />
              <label htmlFor="remember-me" style={{ 
                marginLeft: '0.5rem', 
                display: 'block', 
                fontSize: '0.875rem', 
                color: '#a0aec0' 
              }}>
                Remember me
              </label>
            </div>

            <div style={{ fontSize: '0.875rem' }}>
              <a href="#" style={{ 
                fontWeight: '500', 
                color: '#3dd5c8',
                textDecoration: 'none',
                transition: 'color 0.2s'
              }} onMouseOver={(e) => e.currentTarget.style.color = 'rgba(61, 213, 200, 0.9)'} onMouseOut={(e) => e.currentTarget.style.color = '#3dd5c8'}>
                Forgot your password?
              </a>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <button
              type="submit"
              disabled={loading}
              style={{ 
                position: 'relative', 
                display: 'flex', 
                width: '100%', 
                justifyContent: 'center', 
                borderRadius: '0.375rem', 
                background: 'linear-gradient(135deg, #3dd5c8 0%, #e94e87 50%, #f5a76c 100%)', 
                padding: '0.75rem 1rem', 
                fontSize: '0.875rem', 
                fontWeight: '500', 
                color: 'white', 
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                opacity: loading ? '0.7' : '1',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                if (!loading) {
                  e.currentTarget.style.opacity = '0.9';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseOut={(e) => {
                if (!loading) {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'translateY(0)';
                }
              }}
            >
              {loading ? (
                <>
                  <svg style={{ 
                    animation: 'spin 1s linear infinite',
                    marginRight: '0.5rem',
                    height: '1.25rem',
                    width: '1.25rem'
                  }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle style={{ opacity: '0.25' }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path style={{ opacity: '0.75' }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </>
              ) : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
