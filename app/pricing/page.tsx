"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);
  
  const toggleBilling = () => {
    setAnnual(!annual);
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              Choose the plan that fits your business needs. No hidden fees, no surprises.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <span className={`mr-3 ${annual ? 'text-white' : 'text-foreground/70'}`}>Annual</span>
              <button 
                onClick={toggleBilling}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-card"
              >
                <span className="sr-only">Toggle billing frequency</span>
                <span
                  className={`${
                    annual ? 'translate-x-1' : 'translate-x-6'
                  } inline-block h-4 w-4 transform rounded-full bg-primary transition`}
                />
              </button>
              <span className={`ml-3 ${!annual ? 'text-white' : 'text-foreground/70'}`}>Monthly</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Basic</h3>
                <p className="text-foreground/70 mb-6">For small businesses just getting started</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${annual ? '159' : '199'}</span>
                  <span className="text-foreground/70">/month</span>
                  {annual && (
                    <span className="block text-sm text-primary mt-1">Save $480 annually</span>
                  )}
                </div>
                
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
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-3 mt-1">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Email support</span>
                  </li>
                </ul>
                
                <Link
                  href="/register?plan=basic"
                  className="block w-full py-3 px-4 bg-transparent border border-border text-center rounded-md hover:bg-primary hover:border-primary hover:text-white transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
            
            {/* Growth Plan */}
            <div className="bg-card border-2 border-primary rounded-2xl overflow-hidden shadow-lg relative transform scale-105 z-10">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-gradient text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Growth</h3>
                <p className="text-foreground/70 mb-6">For growing businesses with established presence</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${annual ? '399' : '499'}</span>
                  <span className="text-foreground/70">/month</span>
                  {annual && (
                    <span className="block text-sm text-primary mt-1">Save $1,200 annually</span>
                  )}
                </div>
                
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
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-3 mt-1">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Priority email & chat support</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-3 mt-1">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Analytics dashboard</span>
                  </li>
                </ul>
                
                <Link
                  href="/register?plan=growth"
                  className="block w-full py-3 px-4 bg-primary text-white text-center rounded-md hover:opacity-90 transition-opacity"
                >
                  Get Started
                </Link>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-foreground/70 mb-6">For larger businesses with complex needs</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${annual ? '1,199' : '1,499'}</span>
                  <span className="text-foreground/70">+/month</span>
                  {annual && (
                    <span className="block text-sm text-primary mt-1">Save $3,600 annually</span>
                  )}
                </div>
                
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
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-3 mt-1">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-3 mt-1">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Custom integrations</span>
                  </li>
                </ul>
                
                <Link
                  href="/contact"
                  className="block w-full py-3 px-4 bg-transparent border border-border text-center rounded-md hover:bg-secondary hover:border-secondary hover:text-white transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Compare Features</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-6 font-semibold">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold">Basic</th>
                    <th className="text-center py-4 px-6 font-semibold">Growth</th>
                    <th className="text-center py-4 px-6 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6">Website Analysis</td>
                    <td className="text-center py-4 px-6">Basic</td>
                    <td className="text-center py-4 px-6">Advanced</td>
                    <td className="text-center py-4 px-6">Custom</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6">Competitor Analysis</td>
                    <td className="text-center py-4 px-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mx-auto">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </td>
                    <td className="text-center py-4 px-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mx-auto">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </td>
                    <td className="text-center py-4 px-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mx-auto">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6">Number of Personas</td>
                    <td className="text-center py-4 px-6">2</td>
                    <td className="text-center py-4 px-6">5</td>
                    <td className="text-center py-4 px-6">Unlimited</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6">Monthly Content</td>
                    <td className="text-center py-4 px-6">20 pieces</td>
                    <td className="text-center py-4 px-6">50 pieces</td>
                    <td className="text-center py-4 px-6">200+ pieces</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6">Execution</td>
                    <td className="text-center py-4 px-6">Manual guidance</td>
                    <td className="text-center py-4 px-6">Semi-automated</td>
                    <td className="text-center py-4 px-6">Fully automated</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6">Analytics Dashboard</td>
                    <td className="text-center py-4 px-6">Basic</td>
                    <td className="text-center py-4 px-6">Advanced</td>
                    <td className="text-center py-4 px-6">Custom</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6">A/B Testing</td>
                    <td className="text-center py-4 px-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mx-auto">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </td>
                    <td className="text-center py-4 px-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mx-auto">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </td>
                    <td className="text-center py-4 px-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mx-auto">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6">Custom Integrations</td>
                    <td className="text-center py-4 px-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mx-auto">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </td>
                    <td className="text-center py-4 px-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mx-auto">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </td>
                    <td className="text-center py-4 px-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mx-auto">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-6">Support</td>
                    <td className="text-center py-4 px-6">Email</td>
                    <td className="text-center py-4 px-6">Priority email & chat</td>
                    <td className="text-center py-4 px-6">Dedicated manager</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="grid gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Can I switch plans later?</h3>
                <p className="text-foreground/70">
                  Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be prorated for the remainder of your billing cycle. When downgrading, the new rate will take effect at the start of your next billing cycle.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Is there a free trial?</h3>
                <p className="text-foreground/70">
                  We offer a 14-day free trial for our Basic and Growth plans. No credit card is required to start your trial. For Enterprise plans, we offer a personalized demo instead.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">What payment methods do you accept?</h3>
                <p className="text-foreground/70">
                  We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. For Enterprise plans, we also offer invoice payment options.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Can I cancel my subscription?</h3>
                <p className="text-foreground/70">
                  Yes, you can cancel your subscription at any time from your account settings. When you cancel, you'll retain access to your plan until the end of your current billing cycle.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Do you offer discounts for nonprofits or educational institutions?</h3>
                <p className="text-foreground/70">
                  Yes, we offer special pricing for nonprofits, educational institutions, and startups. Please contact our sales team to learn more about our discount programs.
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
