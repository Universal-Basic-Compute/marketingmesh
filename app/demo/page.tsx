"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function DemoPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            See <span className="gradient-text">MarketingMesh</span> in Action
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-10">
            Experience how our AI swarm can transform your marketing strategy with a personalized demo tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto">
            <div className="aspect-video relative bg-dark flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary-gradient flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
              <Image 
                src="/MM.png" 
                alt="MarketingMesh Demo Video Thumbnail" 
                width={300} 
                height={300}
                className="opacity-20"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Product Overview Demo</h3>
              <p className="text-foreground/70 mb-6">
                This 5-minute demo walks through the core capabilities of MarketingMesh, showing how our AI swarm analyzes websites, creates virtual focus groups, and develops targeted marketing campaigns.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Website Analysis</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">Persona Creation</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Campaign Development</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Execution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Request a Personalized Demo</h2>
              <p className="text-foreground/70">
                Want to see how MarketingMesh can work specifically for your business? Fill out the form below and our team will reach out to schedule a personalized demo.
              </p>
            </div>

            {submitted ? (
              <div className="bg-card border border-border rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                <p className="text-foreground/70 mb-6">
                  Your demo request has been received. One of our team members will contact you shortly to schedule your personalized demo.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  <span>Return to homepage</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Acme Inc."
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell us about your business
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="What are your marketing goals? What challenges are you facing?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 bg-primary-gradient text-white font-medium rounded-md hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-70"
                >
                  {loading ? 'Submitting...' : 'Request Demo'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Have questions about our demo process? Here are answers to some common questions.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto grid gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">How long does a demo typically last?</h3>
              <p className="text-foreground/70">
                Our standard demo lasts about 30 minutes, which includes a presentation of the platform and time for questions. We can adjust the length based on your needs.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Do I need to prepare anything for the demo?</h3>
              <p className="text-foreground/70">
                No preparation is required. However, if you have specific questions or use cases you'd like us to address, letting us know in advance helps us tailor the demo to your needs.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Can I invite other team members to the demo?</h3>
              <p className="text-foreground/70">
                Absolutely! We encourage you to invite anyone from your team who would benefit from seeing the platform in action. Just let us know how many people will be attending.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Is there a trial period after the demo?</h3>
              <p className="text-foreground/70">
                Yes, we offer a 14-day trial period for qualified businesses. During the demo, we'll discuss whether a trial would be the right next step for your organization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
