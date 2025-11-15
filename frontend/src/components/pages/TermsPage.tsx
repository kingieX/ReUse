import { Card, CardContent } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { FileText } from "lucide-react";

export function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Hero */}
        <div className="mb-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#22C55E]/10 flex items-center justify-center">
            <FileText className="w-8 h-8 text-[#22C55E]" />
          </div>
          <h1 className="mb-2">Terms of Service</h1>
          <p className="text-[#64748B]">Last updated: November 12, 2025</p>
        </div>

        <Card className="border-0 shadow-xl">
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-gray max-w-none">
              <h2>1. Acceptance of Terms</h2>
              <p className="text-[#64748B]">
                Welcome to ReUse ("we," "our," or "us"). By accessing or using our platform, 
                you agree to be bound by these Terms of Service ("Terms"). If you do not agree 
                to these Terms, please do not use our services.
              </p>

              <h2>2. Description of Service</h2>
              <p className="text-[#64748B]">
                ReUse is a smart recycling platform that enables users to:
              </p>
              <ul className="text-[#64748B] space-y-2">
                <li>Locate verified recycling drop-off points</li>
                <li>Drop off recyclable materials at partner centers</li>
                <li>Earn tokens based on the weight and type of materials recycled</li>
                <li>Redeem tokens for rewards including airtime, data, and cash</li>
                <li>Track personal and community environmental impact</li>
              </ul>

              <h2>3. User Accounts</h2>
              <h3>3.1 Registration</h3>
              <p className="text-[#64748B]">
                To use ReUse, you must create an account by providing a valid phone number. 
                You agree to provide accurate, current, and complete information during registration.
              </p>
              <h3>3.2 Account Security</h3>
              <p className="text-[#64748B]">
                You are responsible for maintaining the confidentiality of your account credentials 
                and for all activities that occur under your account. You must immediately notify 
                us of any unauthorized use of your account.
              </p>
              <h3>3.3 One Account Per User</h3>
              <p className="text-[#64748B]">
                Each user may only maintain one account. Multiple accounts per individual are prohibited.
              </p>

              <h2>4. Token System</h2>
              <h3>4.1 Earning Tokens</h3>
              <p className="text-[#64748B]">
                Tokens are earned by dropping off recyclable materials at verified partner locations. 
                The number of tokens earned depends on:
              </p>
              <ul className="text-[#64748B] space-y-2">
                <li>Type of material (plastic, glass, metal, etc.)</li>
                <li>Weight of materials</li>
                <li>Quality and condition of materials</li>
                <li>Verification by partner center staff</li>
              </ul>
              <h3>4.2 Token Validity</h3>
              <p className="text-[#64748B]">
                Tokens are valid for 12 months from the date they are earned. Expired tokens 
                will be automatically removed from your account.
              </p>
              <h3>4.3 Token Ownership</h3>
              <p className="text-[#64748B]">
                Tokens have no cash value and cannot be transferred to other users. Tokens are 
                non-refundable and can only be redeemed through our platform.
              </p>

              <h2>5. Redemption of Rewards</h2>
              <h3>5.1 Available Rewards</h3>
              <p className="text-[#64748B]">
                Tokens may be redeemed for airtime, mobile data, or cash transfers, subject to 
                availability and minimum redemption requirements.
              </p>
              <h3>5.2 Processing Time</h3>
              <p className="text-[#64748B]">
                Airtime and data rewards are typically processed within 5 minutes. Cash transfers 
                may take up to 24 hours. We are not responsible for delays caused by third-party 
                service providers.
              </p>
              <h3>5.3 Reward Modifications</h3>
              <p className="text-[#64748B]">
                We reserve the right to modify, suspend, or discontinue any rewards at any time 
                without prior notice.
              </p>

              <h2>6. User Conduct</h2>
              <p className="text-[#64748B]">You agree not to:</p>
              <ul className="text-[#64748B] space-y-2">
                <li>Provide false or misleading information about recyclable materials</li>
                <li>Attempt to manipulate the token system or redeem tokens fraudulently</li>
                <li>Use the platform for any illegal or unauthorized purpose</li>
                <li>Interfere with or disrupt the platform's operation</li>
                <li>Create multiple accounts to gain unfair advantages</li>
                <li>Harass, abuse, or harm other users or our partners</li>
              </ul>

              <h2>7. Partner Centers</h2>
              <p className="text-[#64748B]">
                ReUse works with independent recycling centers. We are not responsible for:
              </p>
              <ul className="text-[#64748B] space-y-2">
                <li>The operation or availability of partner centers</li>
                <li>Disputes between users and partner centers</li>
                <li>Damage or loss of materials after drop-off</li>
                <li>Partner center policies or procedures</li>
              </ul>

              <h2>8. Intellectual Property</h2>
              <p className="text-[#64748B]">
                All content on the ReUse platform, including but not limited to text, graphics, 
                logos, icons, images, and software, is the property of ReUse and is protected by 
                Nigerian and international copyright laws.
              </p>

              <h2>9. Privacy</h2>
              <p className="text-[#64748B]">
                Your use of ReUse is subject to our Privacy Policy, which is incorporated into 
                these Terms by reference. Please review our Privacy Policy to understand our 
                data practices.
              </p>

              <h2>10. Limitation of Liability</h2>
              <p className="text-[#64748B]">
                To the fullest extent permitted by law, ReUse shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, or any loss of profits or 
                revenues, whether incurred directly or indirectly.
              </p>

              <h2>11. Termination</h2>
              <p className="text-[#64748B]">
                We reserve the right to suspend or terminate your account at any time for violations 
                of these Terms or for any other reason at our sole discretion. Upon termination, 
                unredeemed tokens will be forfeited.
              </p>

              <h2>12. Changes to Terms</h2>
              <p className="text-[#64748B]">
                We may modify these Terms at any time. We will notify you of significant changes 
                via email or through the platform. Your continued use of ReUse after such 
                modifications constitutes acceptance of the updated Terms.
              </p>

              <h2>13. Governing Law</h2>
              <p className="text-[#64748B]">
                These Terms shall be governed by and construed in accordance with the laws of 
                the Federal Republic of Nigeria, without regard to its conflict of law provisions.
              </p>

              <h2>14. Dispute Resolution</h2>
              <p className="text-[#64748B]">
                Any disputes arising out of or relating to these Terms or the use of ReUse shall 
                be resolved through good faith negotiation. If negotiation fails, disputes shall 
                be submitted to arbitration in Asaba, Delta State.
              </p>

              <h2>15. Contact Information</h2>
              <p className="text-[#64748B]">
                For questions about these Terms, please contact us at:
              </p>
              <p className="text-[#64748B]">
                Email: legal@reuse.ng<br />
                Phone: +234 800 RECYCLE<br />
                Address: 25 Nnebisi Road, Asaba, Delta State, Nigeria
              </p>

              <div className="mt-8 p-4 bg-[#F3F4F6] rounded-lg">
                <p className="text-[#64748B]">
                  By using ReUse, you acknowledge that you have read, understood, and agree to be 
                  bound by these Terms of Service.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}