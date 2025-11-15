import { Card, CardContent } from "../ui/card";
import { Shield } from "lucide-react";

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Hero */}
        <div className="mb-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#22C55E]/10 flex items-center justify-center">
            <Shield className="w-8 h-8 text-[#22C55E]" />
          </div>
          <h1 className="mb-2">Privacy Policy</h1>
          <p className="text-[#64748B]">Last updated: November 12, 2025</p>
        </div>

        <Card className="border-0 shadow-xl">
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-gray max-w-none">
              <h2>1. Introduction</h2>
              <p className="text-[#64748B]">
                At ReUse, we are committed to protecting your privacy and ensuring the security 
                of your personal information. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you use our platform.
              </p>

              <h2>2. Information We Collect</h2>
              <h3>2.1 Information You Provide</h3>
              <p className="text-[#64748B]">
                We collect information that you voluntarily provide when using our services:
              </p>
              <ul className="text-[#64748B] space-y-2">
                <li>Phone number (for account creation and verification)</li>
                <li>Name (optional, for personalization)</li>
                <li>Email address (if provided for communications)</li>
                <li>Bank account details (only when redeeming cash rewards)</li>
                <li>Drop-off photos (optional, for verification)</li>
                <li>Feedback and communications with our support team</li>
              </ul>

              <h3>2.2 Automatically Collected Information</h3>
              <p className="text-[#64748B]">
                When you use ReUse, we automatically collect certain information:
              </p>
              <ul className="text-[#64748B] space-y-2">
                <li>Device information (type, operating system, browser)</li>
                <li>IP address and general location data</li>
                <li>Usage data (pages visited, features used, time spent)</li>
                <li>Transaction history (drop-offs and redemptions)</li>
                <li>Token balance and activity logs</li>
              </ul>

              <h3>2.3 Location Information</h3>
              <p className="text-[#64748B]">
                With your permission, we collect location data to help you find nearby drop-off 
                points. You can disable location services at any time through your device settings.
              </p>

              <h2>3. How We Use Your Information</h2>
              <p className="text-[#64748B]">We use the collected information to:</p>
              <ul className="text-[#64748B] space-y-2">
                <li>Create and manage your account</li>
                <li>Process drop-offs and credit tokens to your account</li>
                <li>Process reward redemptions</li>
                <li>Communicate with you about your account and transactions</li>
                <li>Provide customer support</li>
                <li>Improve and optimize our platform</li>
                <li>Detect and prevent fraud and abuse</li>
                <li>Comply with legal obligations</li>
                <li>Send you updates, promotions, and educational content (with your consent)</li>
                <li>Calculate and display environmental impact metrics</li>
              </ul>

              <h2>4. Information Sharing and Disclosure</h2>
              <h3>4.1 Partner Centers</h3>
              <p className="text-[#64748B]">
                We share limited information with our verified recycling partner centers to 
                facilitate drop-offs and token allocation. This may include your user ID and 
                transaction details.
              </p>

              <h3>4.2 Service Providers</h3>
              <p className="text-[#64748B]">
                We work with third-party service providers who help us operate our platform:
              </p>
              <ul className="text-[#64748B] space-y-2">
                <li>Telecommunications providers (for airtime and data rewards)</li>
                <li>Payment processors (for cash transfers)</li>
                <li>SMS providers (for OTP verification)</li>
                <li>Analytics services (to improve our platform)</li>
                <li>Cloud hosting providers (to store data securely)</li>
              </ul>

              <h3>4.3 Legal Requirements</h3>
              <p className="text-[#64748B]">
                We may disclose your information if required by law, court order, or government 
                regulation, or if we believe disclosure is necessary to:
              </p>
              <ul className="text-[#64748B] space-y-2">
                <li>Comply with legal obligations</li>
                <li>Protect our rights, property, or safety</li>
                <li>Prevent fraud or abuse</li>
                <li>Respond to emergencies</li>
              </ul>

              <h3>4.4 Business Transfers</h3>
              <p className="text-[#64748B]">
                If ReUse is involved in a merger, acquisition, or sale of assets, your information 
                may be transferred as part of that transaction.
              </p>

              <h2>5. Data Security</h2>
              <p className="text-[#64748B]">
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="text-[#64748B] space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure authentication via OTP</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and employee training</li>
                <li>Secure data centers with physical and digital protections</li>
              </ul>
              <p className="text-[#64748B]">
                However, no method of transmission over the internet is 100% secure. While we 
                strive to protect your information, we cannot guarantee absolute security.
              </p>

              <h2>6. Your Rights and Choices</h2>
              <h3>6.1 Access and Updates</h3>
              <p className="text-[#64748B]">
                You can access and update your account information at any time through the platform 
                or by contacting our support team.
              </p>

              <h3>6.2 Data Deletion</h3>
              <p className="text-[#64748B]">
                You may request deletion of your account and personal data by contacting us at 
                privacy@reuse.ng. We will retain certain information as required by law or for 
                legitimate business purposes.
              </p>

              <h3>6.3 Marketing Communications</h3>
              <p className="text-[#64748B]">
                You can opt out of promotional emails by clicking the unsubscribe link in any 
                marketing email. You cannot opt out of transactional communications related to 
                your account.
              </p>

              <h3>6.4 Location Services</h3>
              <p className="text-[#64748B]">
                You can disable location tracking through your device settings. This may limit 
                certain features like finding nearby drop-off points.
              </p>

              <h2>7. Children's Privacy</h2>
              <p className="text-[#64748B]">
                ReUse is not intended for users under the age of 13. We do not knowingly collect 
                personal information from children under 13. If we become aware that we have 
                collected such information, we will promptly delete it.
              </p>

              <h2>8. Data Retention</h2>
              <p className="text-[#64748B]">
                We retain your personal information for as long as your account is active or as 
                needed to provide our services. We may retain certain information for longer 
                periods as required by law or for legitimate business purposes, such as:
              </p>
              <ul className="text-[#64748B] space-y-2">
                <li>Transaction records (7 years for accounting purposes)</li>
                <li>Communication logs (3 years for customer support)</li>
                <li>Fraud prevention data (as needed)</li>
              </ul>

              <h2>9. International Data Transfers</h2>
              <p className="text-[#64748B]">
                Your information may be transferred to and processed in countries other than 
                Nigeria. We ensure that such transfers comply with applicable data protection 
                laws and that adequate safeguards are in place.
              </p>

              <h2>10. Cookies and Tracking Technologies</h2>
              <p className="text-[#64748B]">
                We use cookies and similar technologies to enhance your experience, analyze usage 
                patterns, and improve our platform. You can control cookie preferences through 
                your browser settings.
              </p>

              <h2>11. Changes to This Privacy Policy</h2>
              <p className="text-[#64748B]">
                We may update this Privacy Policy from time to time. We will notify you of 
                significant changes by email or through a prominent notice on our platform. Your 
                continued use of ReUse after such changes constitutes acceptance of the updated 
                Privacy Policy.
              </p>

              <h2>12. Contact Us</h2>
              <p className="text-[#64748B]">
                If you have questions, concerns, or requests regarding this Privacy Policy or our 
                data practices, please contact us:
              </p>
              <p className="text-[#64748B]">
                Email: privacy@reuse.ng<br />
                Phone: +234 800 RECYCLE<br />
                Address: 25 Nnebisi Road, Asaba, Delta State, Nigeria<br />
                Data Protection Officer: dpo@reuse.ng
              </p>

              <div className="mt-8 p-4 bg-[#22C55E]/10 rounded-lg border-l-4 border-[#22C55E]">
                <h4 className="mb-2 text-[#22C55E]">Your Privacy Matters</h4>
                <p className="text-[#64748B]">
                  We are committed to transparency and protecting your privacy. If you have any 
                  concerns about how we handle your data, please don't hesitate to reach out to 
                  our team.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}