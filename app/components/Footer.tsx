import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/[.08] dark:border-white/[.12] bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold">MarketingMesh</span>
            </Link>
            <p className="text-sm text-foreground/70 max-w-xs">
              End-to-end AI marketing solution that leverages swarm intelligence to grow your business.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features" className="hover:text-foreground/80 transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-foreground/80 transition-colors">Pricing</Link></li>
              <li><Link href="/integrations" className="hover:text-foreground/80 transition-colors">Integrations</Link></li>
              <li><Link href="/roadmap" className="hover:text-foreground/80 transition-colors">Roadmap</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="hover:text-foreground/80 transition-colors">Blog</Link></li>
              <li><Link href="/docs" className="hover:text-foreground/80 transition-colors">Documentation</Link></li>
              <li><Link href="/support" className="hover:text-foreground/80 transition-colors">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-foreground/80 transition-colors">About</Link></li>
              <li><Link href="/careers" className="hover:text-foreground/80 transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-foreground/80 transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-foreground/80 transition-colors">Privacy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-black/[.08] dark:border-white/[.12] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/70">
            &copy; {new Date().getFullYear()} MarketingMesh. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="https://twitter.com" className="text-foreground/70 hover:text-foreground transition-colors">
              Twitter
            </Link>
            <Link href="https://linkedin.com" className="text-foreground/70 hover:text-foreground transition-colors">
              LinkedIn
            </Link>
            <Link href="https://github.com" className="text-foreground/70 hover:text-foreground transition-colors">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
