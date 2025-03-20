import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>At MarketingMesh, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
          <p>Please read this privacy policy carefully before using our Service.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Data We Collect</h2>
          <p>We collect several different types of information for various purposes to provide and improve our Service to you:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Personal Data</strong>: While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to:
              <ul className="list-disc pl-6 mt-2">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Cookies and Usage Data</li>
              </ul>
            </li>
            <li className="mt-4"><strong>Usage Data</strong>: We may also collect information on how the Service is accessed and used ("Usage Data"). This may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</li>
            <li className="mt-4"><strong>Marketing Data</strong>: With your permission, we may use your data to analyze and improve your marketing campaigns when you use our Service.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Data</h2>
          <p>MarketingMesh uses the collected data for various purposes:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our Service</li>
            <li>To monitor the usage of our Service</li>
            <li>To detect, prevent and address technical issues</li>
            <li>To provide you with news, special offers and general information about other goods, services and events which we offer</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Retention</h2>
          <p>MarketingMesh will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.</p>
          <p>We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Transfer</h2>
          <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.</p>
          <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Disclosure</h2>
          <p>We may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Comply with a legal obligation</li>
            <li>Protect and defend the rights or property of MarketingMesh</li>
            <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
            <li>Protect the personal safety of users of the Service or the public</li>
            <li>Protect against legal liability</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Your Data Protection Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal data, such as:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>The right to access, update or delete the information we have on you</li>
            <li>The right of rectification - the right to have your information corrected if it is inaccurate or incomplete</li>
            <li>The right to object - the right to object to our processing of your Personal Data</li>
            <li>The right of restriction - the right to request that we restrict the processing of your personal information</li>
            <li>The right to data portability - the right to be provided with a copy of your Personal Data in a structured, machine-readable and commonly used format</li>
            <li>The right to withdraw consent - the right to withdraw your consent at any time where we relied on your consent to process your personal information</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Cookies</h2>
          <p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>
          <p>Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Service Providers</h2>
          <p>We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>
          <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.</p>
          <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <p>Email: privacy@marketingmesh.com</p>
          <p>Address: 123 Marketing Street, Suite 100, San Francisco, CA 94103</p>
        </div>
      </div>
    </div>
  );
}
