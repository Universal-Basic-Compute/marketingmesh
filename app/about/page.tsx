export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Mission
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              We're building the future of marketing automation by combining advanced AI with deep marketing expertise to help businesses of all sizes grow and succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                MarketingMesh was founded in 2023 by a team of marketing professionals and AI engineers who recognized a fundamental problem: while large enterprises had access to sophisticated marketing resources, small and medium-sized businesses were left behind.
              </p>
              <p>
                Our founders had witnessed firsthand how smaller businesses struggled to create consistent, high-quality marketing campaigns while juggling all the other aspects of running a business. They envisioned a solution that would democratize access to enterprise-grade marketing capabilities.
              </p>
              <p>
                The idea was simple but powerful: build an AI system that could understand a business's context, create targeted marketing campaigns, and execute them across platforms—all with minimal human intervention.
              </p>
              <p>
                After months of development and testing with early adopters, MarketingMesh was born. Today, we're proud to help businesses of all sizes achieve their growth goals through intelligent, automated marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-foreground/70">
                  We're committed to delivering the highest quality solutions. We continuously improve our technology and processes to ensure our customers receive exceptional results.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Empowerment</h3>
                <p className="text-foreground/70">
                  We believe in democratizing access to sophisticated marketing capabilities. Our platform empowers businesses of all sizes to compete effectively in their markets.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                <p className="text-foreground/70">
                  We operate with honesty and transparency in all our interactions. We're committed to ethical AI practices and responsible marketing that respects both businesses and consumers.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
                <p className="text-foreground/70">
                  Our customers' success is our success. We listen carefully to their needs and continuously evolve our platform to help them achieve their business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-1">Alex Johnson</h3>
                <p className="text-foreground/70 mb-3">CEO & Co-Founder</p>
                <p className="text-sm text-foreground/60">
                  Former marketing executive with 15+ years of experience at leading tech companies.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-secondary to-accent mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-1">Samantha Chen</h3>
                <p className="text-foreground/70 mb-3">CTO & Co-Founder</p>
                <p className="text-sm text-foreground/60">
                  AI researcher and engineer with a background in natural language processing and machine learning.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-primary mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-1">Michael Rodriguez</h3>
                <p className="text-foreground/70 mb-3">COO</p>
                <p className="text-sm text-foreground/60">
                  Operations expert who has scaled multiple startups from early stage to acquisition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Join Us on Our Mission
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            We're building the future of marketing automation and we'd love for you to be a part of it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/careers"
              className="btn bg-white text-dark hover:bg-white/90"
            >
              View Careers
            </a>
            <a
              href="/contact"
              className="btn btn-secondary"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
