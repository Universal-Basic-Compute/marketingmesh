export default function FeaturesPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Powerful Features for Modern Marketing
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              MarketingMesh combines advanced AI capabilities to deliver a complete marketing solution that grows with your business.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-16">
              {/* Feature 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    Core Feature
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Contextual Analysis Engine</h2>
                  <p className="text-foreground/70 mb-6">
                    Our AI analyzes your website, content, and competitors to understand your business context and goals.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-3 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Comprehensive website analysis</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-3 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Competitive positioning assessment</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-3 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Brand voice and messaging extraction</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-3 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Target market identification</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 h-64 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
                <div className="md:order-2">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                    Core Feature
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Virtual Focus Group Generator</h2>
                  <p className="text-foreground/70 mb-6">
                    Create detailed customer personas and simulate audience reactions to potential marketing approaches.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mr-3 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Data-driven persona development</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mr-3 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Behavioral simulation and modeling</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mr-3 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Preference and response prediction</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mr-3 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Messaging effectiveness testing</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 h-64 flex items-center justify-center md:order-1">
                  <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                    Core Feature
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Campaign Creation Studio</h2>
                  <p className="text-foreground/70 mb-6">
                    Develop comprehensive marketing campaigns with cohesive messaging across multiple formats.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent mr-3 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>On-brand copywriting and messaging</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent mr-3 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Image creation and editing</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent mr-3 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Campaign theme development</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent mr-3 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Multi-format content adaptation</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 h-64 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Feature 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
                <div className="md:order-2">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    Core Feature
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Execution Gateway</h2>
                  <p className="text-foreground/70 mb-6">
                    Deploy campaigns across selected channels and continuously optimize for the best results.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-3 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Multi-platform deployment</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-3 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Scheduling optimization</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-3 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Performance tracking and analytics</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-3 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Iterative improvement and optimization</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 h-64 flex items-center justify-center md:order-1">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Features</h2>
            <p className="text-foreground/70">
              Beyond our core capabilities, MarketingMesh offers a range of features to enhance your marketing efforts.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Content Calendar</h3>
              <p className="text-foreground/70">
                Plan and visualize your content schedule across all channels with our intuitive calendar interface.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                  <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Analytics Dashboard</h3>
              <p className="text-foreground/70">
                Track the performance of your campaigns with comprehensive analytics and actionable insights.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">A/B Testing</h3>
              <p className="text-foreground/70">
                Test different versions of your content to determine what resonates best with your audience.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M4 11a9 9 0 0 1 9 9"></path>
                  <path d="M4 4a16 16 0 0 1 16 16"></path>
                  <circle cx="5" cy="19" r="1"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Social Listening</h3>
              <p className="text-foreground/70">
                Monitor social media for mentions of your brand and industry trends to inform your marketing strategy.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Competitor Analysis</h3>
              <p className="text-foreground/70">
                Gain insights into your competitors' marketing strategies and identify opportunities for differentiation.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Brand Asset Management</h3>
              <p className="text-foreground/70">
                Store and organize your brand assets for easy access and consistent usage across all marketing materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Integrations</h2>
            <p className="text-foreground/70">
              MarketingMesh seamlessly integrates with your favorite tools and platforms.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 flex items-center justify-center h-24">
              <span className="text-lg font-semibold">Facebook</span>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 flex items-center justify-center h-24">
              <span className="text-lg font-semibold">Instagram</span>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 flex items-center justify-center h-24">
              <span className="text-lg font-semibold">Twitter</span>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 flex items-center justify-center h-24">
              <span className="text-lg font-semibold">LinkedIn</span>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 flex items-center justify-center h-24">
              <span className="text-lg font-semibold">Google Ads</span>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 flex items-center justify-center h-24">
              <span className="text-lg font-semibold">Mailchimp</span>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 flex items-center justify-center h-24">
              <span className="text-lg font-semibold">HubSpot</span>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 flex items-center justify-center h-24">
              <span className="text-lg font-semibold">Shopify</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using MarketingMesh to grow their audience and increase revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/register"
              className="btn bg-white text-dark hover:bg-white/90"
            >
              Get Started Today
            </a>
            <a
              href="/demo"
              className="btn btn-secondary"
            >
              Request Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
