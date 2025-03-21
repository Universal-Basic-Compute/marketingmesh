"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ 
      borderTop: '1px solid rgba(255,255,255,0.15)', 
      backgroundColor: '#0a0a0a', 
      padding: '4rem 0' 
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 1rem' 
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: '2.5rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '2.5rem',
            '@media (min-width: 768px)': {
              gridTemplateColumns: 'repeat(4, 1fr)'
            }
          }}>
          <div>
            <Link href="/" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              marginBottom: '1.5rem', 
              textDecoration: 'none' 
            }}>
              <Image 
                src="/MM.png" 
                alt="MarketingMesh Logo" 
                width={40} 
                height={40} 
                style={{ borderRadius: '0.5rem' }}
              />
              <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                <span style={{ color: 'white' }}>MARKETING</span>
                <span className="gradient-text">MESH</span>
              </span>
            </Link>
            <p style={{ color: '#a0aec0', maxWidth: '20rem' }}>
              End-to-end AI marketing solution that leverages swarm intelligence to grow your business.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a href="https://twitter.com" aria-label="Twitter" style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#3dd5c8'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#3dd5c8'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://github.com" aria-label="GitHub" style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#3dd5c8'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 style={{ fontWeight: 600, marginBottom: '1.5rem', fontSize: '1.125rem', color: 'white' }}>Product</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><Link href="/features" style={{ color: '#a0aec0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#3dd5c8'} onMouseOut={(e) => e.currentTarget.style.color = '#a0aec0'}>Features</Link></li>
              <li><Link href="/pricing" style={{ color: '#a0aec0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#3dd5c8'} onMouseOut={(e) => e.currentTarget.style.color = '#a0aec0'}>Pricing</Link></li>
              <li><Link href="/integrations" style={{ color: '#a0aec0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#3dd5c8'} onMouseOut={(e) => e.currentTarget.style.color = '#a0aec0'}>Integrations</Link></li>
              <li><Link href="/roadmap" style={{ color: '#a0aec0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#3dd5c8'} onMouseOut={(e) => e.currentTarget.style.color = '#a0aec0'}>Roadmap</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ fontWeight: 600, marginBottom: '1.5rem', fontSize: '1.125rem', color: 'white' }}>Resources</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><Link href="/blog" style={{ color: '#a0aec0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#e94e87'} onMouseOut={(e) => e.currentTarget.style.color = '#a0aec0'}>Blog</Link></li>
              <li><Link href="/docs" style={{ color: '#a0aec0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#e94e87'} onMouseOut={(e) => e.currentTarget.style.color = '#a0aec0'}>Documentation</Link></li>
              <li><Link href="/support" style={{ color: '#a0aec0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#e94e87'} onMouseOut={(e) => e.currentTarget.style.color = '#a0aec0'}>Support</Link></li>
              <li><Link href="/api" style={{ color: '#a0aec0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#e94e87'} onMouseOut={(e) => e.currentTarget.style.color = '#a0aec0'}>API</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ fontWeight: 600, marginBottom: '1.5rem', fontSize: '1.125rem', color: 'white' }}>Company</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><Link href="/about" style={{ color: '#a0aec0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#f5a76c'} onMouseOut={(e) => e.currentTarget.style.color = '#a0aec0'}>About</Link></li>
              <li><Link href="/careers" style={{ color: '#a0aec0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#f5a76c'} onMouseOut={(e) => e.currentTarget.style.color = '#a0aec0'}>Careers</Link></li>
              <li><Link href="/contact" style={{ color: '#a0aec0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#f5a76c'} onMouseOut={(e) => e.currentTarget.style.color = '#a0aec0'}>Contact</Link></li>
              <li><Link href="/privacy" style={{ color: '#a0aec0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#f5a76c'} onMouseOut={(e) => e.currentTarget.style.color = '#a0aec0'}>Privacy</Link></li>
            </ul>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.15)', 
          marginTop: '4rem', 
          paddingTop: '2rem', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '0.875rem', color: '#a0aec0', marginBottom: '1.5rem' }}>
            &copy; {new Date().getFullYear()} MarketingMesh. All rights reserved.
          </p>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            gap: '1.5rem', 
            justifyContent: 'center'
          }}>
            <Link href="/terms" style={{ fontSize: '0.875rem', color: '#a0aec0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#3dd5c8'} onMouseOut={(e) => e.currentTarget.style.color = '#a0aec0'}>
              Terms of Service
            </Link>
            <Link href="/privacy" style={{ fontSize: '0.875rem', color: '#a0aec0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#e94e87'} onMouseOut={(e) => e.currentTarget.style.color = '#a0aec0'}>
              Privacy Policy
            </Link>
            <Link href="/cookies" style={{ fontSize: '0.875rem', color: '#a0aec0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#f5a76c'} onMouseOut={(e) => e.currentTarget.style.color = '#a0aec0'}>
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
