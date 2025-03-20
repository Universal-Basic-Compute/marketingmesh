import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-2 group">
          <Image 
            src="/MM.png" 
            alt="MarketingMesh Logo" 
            width={40} 
            height={40} 
            className="rounded-lg"
          />
          <span className="text-xl font-bold group-hover:opacity-90 transition-opacity">
            <span className="text-white">MARKETING</span>
            <span className="gradient-text">MESH</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Features
          </Link>
          <Link href="/pricing" className="text-foreground/80 hover:text-secondary transition-colors font-medium">
            Pricing
          </Link>
          <Link href="/about" className="text-foreground/80 hover:text-accent transition-colors font-medium">
            About
          </Link>
          <Link href="/blog" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Blog
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="hidden sm:block text-foreground/80 hover:text-secondary transition-colors font-medium"
          >
            Log in
          </Link>
          <Link 
            href="/signup" 
            className="rounded-full bg-primary-gradient text-white px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity shadow-colored hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
