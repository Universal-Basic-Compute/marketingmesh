import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header style={{ 
      position: 'sticky', 
      top: 0, 
      zIndex: 50, 
      width: '100%', 
      borderBottom: '1px solid rgba(255,255,255,0.15)', 
      backgroundColor: 'rgba(10,10,10,0.9)', 
      backdropFilter: 'blur(8px)' 
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
            href="/signup" 
            className="btn btn-primary"
            style={{ fontSize: '0.875rem', padding: '0.625rem 1.25rem' }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
