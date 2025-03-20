import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">
            A Next-Generation AI Swarm for Business Growth
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto">
            Analyze websites, create virtual focus groups, develop targeted marketing campaigns, and execute them across platforms—all with minimal human intervention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="rounded-full bg-foreground text-background px-8 py-3 text-lg font-medium hover:bg-foreground/90 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/demo"
              className="rounded-full border border-black/[.08] dark:border-white/[.145] px-8 py-3 text-lg font-medium hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#f9f9f9] dark:bg-[#111]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Core Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Contextual Analysis Engine</h3>
              <p className="text-foreground/70">
                Analyzes websites and files to understand business context, extracts key messaging, and identifies target markets.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Virtual Focus Group Generator</h3>
              <p className="text-foreground/70">
                Creates detailed personas based on ideal customer profiles and simulates audience reactions to potential marketing approaches.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Campaign Creation Studio</h3>
              <p className="text-foreground/70">
                Develops comprehensive marketing campaigns with cohesive messaging and generates high-quality text and image content.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Execution Gateway</h3>
              <p className="text-foreground/70">
                Deploys campaigns across selected channels, manages posting schedules, and tracks performance metrics for optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-[#f2f2f2] dark:bg-[#1a1a1a] h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Analyze</h3>
              <p className="text-foreground/70">
                We analyze your website, content, and competitors to understand your business context and goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#f2f2f2] dark:bg-[#1a1a1a] h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Create</h3>
              <p className="text-foreground/70">
                Our AI swarm develops targeted marketing campaigns with cohesive messaging across multiple formats.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#f2f2f2] dark:bg-[#1a1a1a] h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Execute</h3>
              <p className="text-foreground/70">
                We deploy your campaigns across selected channels and continuously optimize for the best results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-[#f9f9f9] dark:bg-[#111]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Simple, Transparent Pricing</h2>
          <p className="text-xl text-foreground/70 mb-16 text-center max-w-2xl mx-auto">
            Choose the plan that fits your business needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl shadow-sm border border-black/[.08] dark:border-white/[.12]">
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <p className="text-foreground/70 mb-6">For small businesses just getting started</p>
              <p className="text-4xl font-bold mb-6">$199<span className="text-lg font-normal text-foreground/70">/month</span></p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Website analysis
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  2 personas
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  20 content pieces/month
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Manual execution guidance
                </li>
              </ul>
              
              <Link
                href="/signup?plan=basic"
                className="block w-full text-center rounded-full border border-black/[.08] dark:border-white/[.145] px-6 py-3 font-medium hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors"
              >
                Get Started
              </Link>
            </div>
            
            <div className="bg-background p-8 rounded-xl shadow-sm border-2 border-foreground relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-foreground text-background px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Growth</h3>
              <p className="text-foreground/70 mb-6">For growing businesses with established presence</p>
              <p className="text-4xl font-bold mb-6">$499<span className="text-lg font-normal text-foreground/70">/month</span></p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Website + competitor analysis
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  5 personas
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  50 content pieces/month
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Semi-automated execution
                </li>
              </ul>
              
              <Link
                href="/signup?plan=growth"
                className="block w-full text-center rounded-full bg-foreground text-background px-6 py-3 font-medium hover:bg-foreground/90 transition-colors"
              >
                Get Started
              </Link>
            </div>
            
            <div className="bg-background p-8 rounded-xl shadow-sm border border-black/[.08] dark:border-white/[.12]">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-foreground/70 mb-6">For larger businesses with complex needs</p>
              <p className="text-4xl font-bold mb-6">$1,499<span className="text-lg font-normal text-foreground/70">+/month</span></p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Custom analysis
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Unlimited personas
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  200+ content pieces/month
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Fully automated execution
                </li>
              </ul>
              
              <Link
                href="/contact"
                className="block w-full text-center rounded-full border border-black/[.08] dark:border-white/[.145] px-6 py-3 font-medium hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
            Ready to transform your marketing with AI?
          </h2>
          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
            Join thousands of businesses using MarketingMesh to grow their audience and increase revenue.
          </p>
          <Link
            href="/signup"
            className="rounded-full bg-foreground text-background px-8 py-3 text-lg font-medium hover:bg-foreground/90 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
