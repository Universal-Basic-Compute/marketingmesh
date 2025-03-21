"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset error
    setError('');
    
    // Validate form
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    try {
      setLoading(true);
      
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      // Handle non-JSON responses
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        console.error('Non-JSON response received:', await response.text());
        throw new Error('Server returned non-JSON response. Please try again later.');
      }
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }
      
      // Redirect to login page on success
      router.push('/login?registered=true');
    } catch (err: any) {
      console.error('Registration error:', err);
      if (err.message.includes('fetch')) {
        setError('Network error. Please check your connection and try again.');
      } else {
        setError(err.message || 'An error occurred during registration');
      }
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
            Create your account
          </h2>
          <p style={{ 
            marginTop: '0.5rem', 
            textAlign: 'center', 
            fontSize: '0.875rem', 
            color: '#a0aec0' 
          }}>
            Or{' '}
            <Link href="/login" style={{ 
              fontWeight: '500', 
              color: '#3dd5c8',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }} onMouseOver={(e) => e.currentTarget.style.color = 'rgba(61, 213, 200, 0.9)'} onMouseOut={(e) => e.currentTarget.style.color = '#3dd5c8'}>
              sign in to your account
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
                autoComplete="new-password"
                required
                style={{ 
                  display: 'block', 
                  width: '100%', 
                  border: '0', 
                  padding: '0.75rem 1rem', 
                  backgroundColor: '#111111', 
                  color: 'white', 
                  outline: 'none',
                  marginBottom: '1px'
                }}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="confirm-password" style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
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
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
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
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating account...
                </>
              ) : 'Create account'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
