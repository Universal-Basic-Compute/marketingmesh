import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/[.08] dark:border-white/[.12] bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">MarketingMesh</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/features" className="hover:text-foreground/80 transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-foreground/80 transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="hover:text-foreground/80 transition-colors">
            About
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="hidden sm:block hover:text-foreground/80 transition-colors"
          >
            Log in
          </Link>
          <Link 
            href="/signup" 
            className="rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
