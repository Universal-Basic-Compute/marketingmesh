"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Header() {
  const { data: session, status } = useSession();
  const isAuthenticated = status === 'authenticated';

  return (
    <header style={{ 
      position: 'sticky', 
      top: 0, 
      zIndex: 50, 
      width: '100%', 
      backgroundColor: '#0a0a0a', 
      borderBottom: '1px solid rgba(255,255,255,0.15)'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '1rem', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between' 
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '0.5rem', overflow: 'hidden' }}>
            <Image 
              src="/MM.png" 
              alt="MarketingMesh Logo" 
              width={40} 
              height={40}
            />
          </div>
          <span style={{ 
            fontSize: '1.25rem', 
            fontWeight: 'bold',
            color: 'white'
          }}>
            MARKETING<span className="gradient-text">MESH</span>
          </span>
        </Link>
        
        <nav style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="md:flex">
          <Link href="/features" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#3dd5c8'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}>
            Features
          </Link>
          <Link href="/pricing" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#e94e87'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}>
            Pricing
          </Link>
          <Link href="/about" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#f5a76c'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}>
            About
          </Link>
          <Link href="/blog" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#3dd5c8'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}>
            Blog
          </Link>
        </nav>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {isAuthenticated ? (
            <>
              <Link 
                href="/dashboard" 
                style={{ 
                  display: 'none', 
                  color: 'rgba(255,255,255,0.8)', 
                  textDecoration: 'none', 
                  fontWeight: 500, 
                  transition: 'color 0.2s' 
                }} 
                className="sm:block"
                onMouseOver={(e) => e.currentTarget.style.color = '#3dd5c8'} 
                onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
              >
                Dashboard
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '9999px',
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'white',
                  padding: '0.625rem 1.25rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  transition: 'all 0.2s',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link 
                href="/login" 
                style={{ 
                  display: 'none', 
                  color: 'rgba(255,255,255,0.8)', 
                  textDecoration: 'none', 
                  fontWeight: 500, 
                  transition: 'color 0.2s' 
                }} 
                className="sm:block"
                onMouseOver={(e) => e.currentTarget.style.color = '#e94e87'} 
                onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
              >
                Log in
              </Link>
              <Link 
                href="/register" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #3dd5c8 0%, #e94e87 50%, #f5a76c 100%)',
                  color: 'white',
                  padding: '0.625rem 1.25rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  boxShadow: '0 4px 14px 0 rgba(61, 213, 200, 0.3)',
                  transition: 'all 0.2s',
                  textDecoration: 'none'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.opacity = '0.9';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px 0 rgba(61, 213, 200, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(61, 213, 200, 0.3)';
                }}
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
