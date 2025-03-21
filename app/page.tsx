"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ fontFamily: 'var(--font-geist-sans)' }}>
      {/* Hero Section */}
      <section style={{ 
        padding: '6rem 0', 
        position: 'relative', 
        overflow: 'hidden',
        backgroundColor: '#0a0a0a'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 1rem', 
          textAlign: 'center',
          position: 'relative'
        }}>
          {/* Background decorative elements */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '800px',
            backgroundColor: 'rgba(61, 213, 200, 0.05)',
            borderRadius: '50%',
            filter: 'blur(100px)',
            zIndex: -1
          }}></div>
          
          <h1 style={{
            fontSize: '2.25rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            maxWidth: '56rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.2',
            color: 'white'
          }}>
            A Next-Generation <span style={{ color: '#3dd5c8' }}>AI</span> <span style={{ color: '#e94e87' }}>Swarm</span> for Business Growth
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '3rem',
            maxWidth: '42rem',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Analyze websites, create virtual focus groups, develop targeted marketing campaigns, and execute them across platforms—all with minimal human intervention.
          </p>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '3rem'
          }} className="sm:flex-row">
            <Link
              href="/signup"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #3dd5c8 0%, #e94e87 50%, #f5a76c 100%)',
                color: 'white',
                padding: '0.75rem 1.75rem', // Smaller padding
                fontSize: '1rem', // Smaller font size
                fontWeight: '500',
                boxShadow: '0 4px 14px 0 rgba(61, 213, 200, 0.3)',
                transition: 'all 0.2s',
                textDecoration: 'none',
                maxWidth: '200px', // Add max width
                margin: '0 auto' // Center the button
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
            <Link
              href="/demo"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '9999px',
                backgroundColor: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                padding: '0.75rem 1.75rem', // Smaller padding
                fontSize: '1rem', // Smaller font size
                fontWeight: '500',
                transition: 'all 0.2s',
                textDecoration: 'none',
                maxWidth: '200px', // Add max width
                margin: '0 auto' // Center the button
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Request Demo
            </Link>
          </div>
          {/* Trusted by logos section removed */}
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section style={{ 
        padding: '6rem 0', 
        backgroundColor: '#1a2234'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 1rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            textAlign: 'center',
            color: 'white'
          }}>
            Core Capabilities
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '4rem',
            textAlign: 'center',
            maxWidth: '42rem',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Our AI-powered platform provides everything you need to create and execute effective marketing campaigns.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#111111] p-8 rounded-2xl shadow-sm border border-[rgba(255,255,255,0.15)] hover:shadow-md transition-shadow group card-hover">
              <div className="w-14 h-14 rounded-xl bg-[rgba(61,213,200,0.1)] flex items-center justify-center mb-6 group-hover:bg-[rgba(61,213,200,0.2)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Contextual Analysis Engine</h3>
              <p className="text-muted-foreground">
                Analyzes websites and files to understand business context, extracts key messaging, and identifies target markets.
              </p>
            </div>
            
            <div className="bg-[#111111] p-8 rounded-2xl shadow-sm border border-[rgba(255,255,255,0.15)] hover:shadow-md transition-shadow group card-hover">
              <div className="w-14 h-14 rounded-xl bg-[rgba(233,78,135,0.1)] flex items-center justify-center mb-6 group-hover:bg-[rgba(233,78,135,0.2)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Virtual Focus Group Generator</h3>
              <p className="text-muted-foreground">
                Creates detailed personas based on ideal customer profiles and simulates audience reactions to potential marketing approaches.
              </p>
            </div>
            
            <div className="bg-[#111111] p-8 rounded-2xl shadow-sm border border-[rgba(255,255,255,0.15)] hover:shadow-md transition-shadow group card-hover">
              <div className="w-14 h-14 rounded-xl bg-[rgba(245,167,108,0.1)] flex items-center justify-center mb-6 group-hover:bg-[rgba(245,167,108,0.2)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Campaign Creation Studio</h3>
              <p className="text-muted-foreground">
                Develops comprehensive marketing campaigns with cohesive messaging and generates high-quality text and image content.
              </p>
            </div>
            
            <div className="bg-[#111111] p-8 rounded-2xl shadow-sm border border-[rgba(255,255,255,0.15)] hover:shadow-md transition-shadow group card-hover">
              <div className="w-14 h-14 rounded-xl bg-[rgba(61,213,200,0.1)] flex items-center justify-center mb-6 group-hover:bg-[rgba(61,213,200,0.2)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Execution Gateway</h3>
              <p className="text-muted-foreground">
                Deploys campaigns across selected channels, manages posting schedules, and tracks performance metrics for optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">How It Works</h2>
          <p className="text-xl text-foreground/70 mb-16 text-center max-w-2xl mx-auto">
            Our streamlined process makes marketing automation simple and effective
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-24 left-1/2 -translate-x-1/2 h-0.5 w-[calc(66.6%-100px)] bg-gradient-to-r from-primary via-secondary to-accent"></div>
            
            <div className="text-center relative">
              <div className="bg-teal h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-8 glow-teal z-10 relative">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Analyze</h3>
              <p className="text-muted">
                We analyze your website, content, and competitors to understand your business context and goals.
              </p>
            </div>
            
            <div className="text-center relative">
              <div className="bg-pink h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-8 glow-pink z-10 relative">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Create</h3>
              <p className="text-muted">
                Our AI swarm develops targeted marketing campaigns with cohesive messaging across multiple formats.
              </p>
            </div>
            
            <div className="text-center relative">
              <div className="bg-orange h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-8 glow-orange z-10 relative">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Execute</h3>
              <p className="text-muted">
                We deploy your campaigns across selected channels and continuously optimize for the best results.
              </p>
            </div>
          </div>
          
          {/* Demo CTA */}
          <div className="mt-20 text-center">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 text-teal font-medium hover:underline"
            >
              <span>See how it works in action</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">Simple, Transparent Pricing</h2>
          <p className="text-xl text-foreground/70 mb-16 text-center max-w-2xl mx-auto">
            Choose the plan that fits your business needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#111111] p-8 rounded-2xl shadow-sm border border-[rgba(255,255,255,0.15)] hover:shadow-md transition-all hover:-translate-y-1 transform">
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <p className="text-muted-foreground mb-6">For small businesses just getting started</p>
              <p className="text-4xl font-bold mb-6">$199<span className="text-lg font-normal text-muted-foreground">/month</span></p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-3 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Website analysis</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-3 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>2 personas</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-3 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>20 content pieces/month</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-3 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Manual execution guidance</span>
                </li>
              </ul>
              
              <Link
                href="/signup?plan=basic"
                className="block w-full text-center rounded-full border border-light px-6 py-3 font-medium hover:bg-pink hover:text-white transition-colors"
              >
                Get Started
              </Link>
            </div>
            
            <div className="bg-[#111111] p-8 rounded-2xl shadow-lg border-2 border-[#3dd5c8] relative transform scale-105 z-10">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-gradient text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Growth</h3>
              <p className="text-muted-foreground mb-6">For growing businesses with established presence</p>
              <p className="text-4xl font-bold mb-6">$499<span className="text-lg font-normal text-muted-foreground">/month</span></p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-3 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Website + competitor analysis</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-3 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>5 personas</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-3 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>50 content pieces/month</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-3 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Semi-automated execution</span>
                </li>
              </ul>
              
              <Link
                href="/signup?plan=growth"
                className="block w-full text-center rounded-full bg-teal text-white px-6 py-3 font-medium hover:opacity-90 transition-colors shadow-md hover:shadow-lg"
              >
                Get Started
              </Link>
            </div>
            
            <div className="bg-[#111111] p-8 rounded-2xl shadow-sm border border-[rgba(255,255,255,0.15)] hover:shadow-md transition-all hover:-translate-y-1 transform">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-muted-foreground mb-6">For larger businesses with complex needs</p>
              <p className="text-4xl font-bold mb-6">$1,499<span className="text-lg font-normal text-muted-foreground">+/month</span></p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-3 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Custom analysis</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-3 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Unlimited personas</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-3 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>200+ content pieces/month</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-3 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Fully automated execution</span>
                </li>
              </ul>
              
              <Link
                href="/contact"
                className="block w-full text-center rounded-full border border-light px-6 py-3 font-medium hover:bg-pink hover:text-white transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - New Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">What Our Customers Say</h2>
          <p className="text-xl text-foreground/70 mb-16 text-center max-w-2xl mx-auto">
            Businesses of all sizes are seeing real results with MarketingMesh
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#111111] p-8 rounded-2xl shadow-sm border border-[rgba(255,255,255,0.15)]">
              <div className="flex items-center gap-1 text-yellow-400 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <p className="text-foreground/80 mb-6 italic">
                "MarketingMesh has completely transformed our marketing approach. We're now able to create consistent, high-quality content at scale with minimal effort."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[rgba(61,213,200,0.2)] flex items-center justify-center text-[#3dd5c8] font-bold">
                  JD
                </div>
                <div>
                  <p className="font-semibold">Jane Doe</p>
                  <p className="text-sm text-muted-foreground">Marketing Director, TechCorp</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#111111] p-8 rounded-2xl shadow-sm border border-[rgba(255,255,255,0.15)]">
              <div className="flex items-center gap-1 text-yellow-400 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <p className="text-foreground/80 mb-6 italic">
                "As a small business owner, I never had the resources for a full marketing team. MarketingMesh gives me enterprise-level marketing capabilities at a fraction of the cost."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[rgba(61,213,200,0.2)] flex items-center justify-center text-[#3dd5c8] font-bold">
                  JS
                </div>
                <div>
                  <p className="font-semibold">John Smith</p>
                  <p className="text-sm text-muted-foreground">Founder, Boutique Retail</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#111111] p-8 rounded-2xl shadow-sm border border-[rgba(255,255,255,0.15)]">
              <div className="flex items-center gap-1 text-yellow-400 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <p className="text-foreground/80 mb-6 italic">
                "The virtual focus groups have been a game-changer for us. We're able to test messaging before going to market, saving us time and money while improving results."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[rgba(61,213,200,0.2)] flex items-center justify-center text-[#3dd5c8] font-bold">
                  AJ
                </div>
                <div>
                  <p className="font-semibold">Alex Johnson</p>
                  <p className="text-sm text-muted-foreground">CMO, Growth Startup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-2xl mx-auto text-white">
            Ready to transform your marketing with AI?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Join thousands of businesses using MarketingMesh to grow their audience and increase revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="btn btn-primary bg-white text-dark"
            >
              Get Started Today
            </Link>
            <Link
              href="/demo"
              className="btn btn-secondary"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
