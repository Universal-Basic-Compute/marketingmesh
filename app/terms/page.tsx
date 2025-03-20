import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>Welcome to MarketingMesh ("Company", "we", "our", "us")! These Terms of Service govern your use of our web pages and services operated by MarketingMesh.</p>
          <p>Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information. Please read it here: <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.</p>
          <p>By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Communications</h2>
          <p>By creating an account, you agree to receive communications from us related to your account and the Service. You can opt out of non-essential communications.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Subscriptions</h2>
          <p>Our Service is billed on a subscription basis. You will be billed in advance on a recurring basis, depending on your subscription plan.</p>
          <p>Subscriptions automatically renew unless cancelled before the renewal date. You can cancel your subscription through your account settings or by contacting our support team.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Content</h2>
          <p>Our Service allows you to create, upload, and share content. You retain ownership of your content, but grant us a license to use, modify, and display it for the purpose of providing the Service.</p>
          <p>You are responsible for ensuring you have the rights to any content you upload or create using our Service.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Acceptable Use</h2>
          <p>You agree not to use the Service for any unlawful purposes or to conduct any unlawful activity, including, but not limited to, fraud, embezzlement, money laundering, or insider trading.</p>
          <p>You agree not to upload or share content that is illegal, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Account Security</h2>
          <p>You are responsible for safeguarding your account credentials and for any activities or actions under your account.</p>
          <p>You agree to notify us immediately of any unauthorized access to your account or any other breach of security.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Intellectual Property</h2>
          <p>The Service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of MarketingMesh and its licensors.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Termination</h2>
          <p>We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including, without limitation, if you breach the Terms.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Limitation of Liability</h2>
          <p>In no event shall MarketingMesh, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Changes to Terms</h2>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p>Email: support@marketingmesh.com</p>
          <p>Address: 123 Marketing Street, Suite 100, San Francisco, CA 94103</p>
        </div>
      </div>
    </div>
  );
}
