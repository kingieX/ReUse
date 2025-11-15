import { Card, CardContent } from "../ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Input } from "../ui/input";
import { Search, HelpCircle } from "lucide-react";
import { useState } from "react";

export function FAQsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "How do I sign up for ReUse?",
          a: "Simply click the 'Sign In' button and enter your phone number. We'll send you a one-time password (OTP) to verify your account. No lengthy registration forms required!"
        },
        {
          q: "Is ReUse free to use?",
          a: "Yes! ReUse is completely free to use. There are no subscription fees or hidden costs. You earn tokens by recycling, and those tokens are yours to redeem for rewards."
        },
        {
          q: "What materials can I recycle?",
          a: "We currently accept plastic bottles, glass containers, metal cans, and cardboard. Make sure items are clean and dry before dropping them off."
        },
        {
          q: "Where can I find drop-off points?",
          a: "Use the 'Find Drop-off Points' feature in your dashboard or navigation menu. Our interactive map shows all verified recycling centers near you, along with their hours and distance."
        }
      ]
    },
    {
      category: "Earning Tokens",
      questions: [
        {
          q: "How do I earn tokens?",
          a: "You earn tokens by dropping off recyclable materials at verified collection points. Different materials earn different token amounts based on their weight and type. Tokens are credited to your account once the drop-off is confirmed."
        },
        {
          q: "How many tokens will I get for my recyclables?",
          a: "Token amounts vary based on material type and weight. On average: plastic bottles (5-10 tokens/kg), glass (8-12 tokens/kg), metal (10-15 tokens/kg). The exact amount is confirmed by our partners at drop-off."
        },
        {
          q: "How long does it take to receive my tokens?",
          a: "Most drop-offs are confirmed within 24 hours. You'll receive a notification once your tokens are credited to your account."
        },
        {
          q: "Do my tokens expire?",
          a: "Tokens are valid for 12 months from the date they're earned. We'll send you reminders before they expire so you can redeem them."
        }
      ]
    },
    {
      category: "Redeeming Rewards",
      questions: [
        {
          q: "What rewards can I redeem?",
          a: "You can redeem tokens for airtime (all networks), mobile data bundles, or cash transfers to your bank account. We're constantly adding new reward options based on user feedback."
        },
        {
          q: "How do I redeem my tokens?",
          a: "Go to the Rewards page, select your preferred reward type, choose the amount, and follow the prompts. For airtime and data, enter your phone number. For cash, provide your bank details."
        },
        {
          q: "How long does reward processing take?",
          a: "Airtime and data rewards are typically processed within 5 minutes. Cash transfers can take up to 24 hours to reflect in your account."
        },
        {
          q: "Is there a minimum redemption amount?",
          a: "Yes. The minimum redemption is ₦100 airtime (40 tokens) or 500MB data (50 tokens). For cash transfers, the minimum is ₦500 (200 tokens)."
        }
      ]
    },
    {
      category: "Drop-off Process",
      questions: [
        {
          q: "Do I need to sort my recyclables?",
          a: "Basic sorting (plastic, glass, metal) is appreciated but not required. Our partner centers can help with sorting. However, please ensure all items are clean and dry."
        },
        {
          q: "Can I drop off anytime?",
          a: "Drop-off points have specific operating hours, usually between 8 AM - 6 PM. Check the specific hours for your chosen location in the app before visiting."
        },
        {
          q: "Do I need to take a photo of my drop-off?",
          a: "Photos are optional but recommended. They help speed up verification and ensure accurate token allocation."
        },
        {
          q: "What if the drop-off center is closed?",
          a: "Our app shows real-time status of all centers. If a center is closed, the 'Drop Here' button will be disabled. Please choose an open location or come back during operating hours."
        }
      ]
    },
    {
      category: "Account & Security",
      questions: [
        {
          q: "How is my data protected?",
          a: "We use industry-standard encryption to protect your personal information. We never share your data with third parties without your explicit consent. Read our Privacy Policy for details."
        },
        {
          q: "Can I change my phone number?",
          a: "Yes, contact our support team through the 'Contact Us' page to update your phone number. You'll need to verify the new number via OTP."
        },
        {
          q: "What if I don't receive my OTP?",
          a: "Check that you've entered the correct phone number and have good network coverage. If you still don't receive it after 2 minutes, click 'Resend OTP'. Contact support if the issue persists."
        },
        {
          q: "Can I have multiple accounts?",
          a: "Each phone number can only be linked to one account. This ensures fair distribution of rewards and accurate impact tracking."
        }
      ]
    },
    {
      category: "Technical Issues",
      questions: [
        {
          q: "The app isn't loading properly. What should I do?",
          a: "Try refreshing your browser or clearing your cache. Make sure you have a stable internet connection. If the issue persists, contact our support team."
        },
        {
          q: "My transaction is showing as 'pending'. Is this normal?",
          a: "Yes, drop-offs typically show as pending until verified by our partner center (usually within 24 hours). Redemptions may take a few minutes to process."
        },
        {
          q: "I didn't receive my reward. What should I do?",
          a: "First, check your transaction history to confirm the redemption was successful. For airtime/data, check with your network provider. If the issue isn't resolved, contact support with your transaction ID."
        }
      ]
    }
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      item =>
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Hero */}
        <div className="mb-12 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#22C55E]/10 flex items-center justify-center">
            <HelpCircle className="w-8 h-8 text-[#22C55E]" />
          </div>
          <h1 className="mb-4">Frequently Asked Questions</h1>
          <p className="text-[#64748B] max-w-2xl mx-auto">
            Find answers to common questions about ReUse. Can't find what you're looking for? 
            Contact our support team.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B]" />
            <Input
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>
        </div>

        {/* FAQs */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-8">
            {filteredFaqs.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="border-0 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h3 className="mb-4 text-[#22C55E]">{category.category}</h3>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                        <AccordionTrigger className="text-left hover:text-[#22C55E]">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-[#64748B]">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="border-0 shadow-lg">
            <CardContent className="p-12 text-center">
              <Search className="w-12 h-12 text-[#64748B] mx-auto mb-4" />
              <p className="text-[#64748B]">No FAQs found matching your search.</p>
            </CardContent>
          </Card>
        )}

        {/* Still Need Help */}
        <Card className="mt-12 bg-gradient-to-br from-[#22C55E] to-[#16A34A] border-0 shadow-xl">
          <CardContent className="p-8 text-center">
            <h3 className="text-white mb-2">Still Need Help?</h3>
            <p className="text-white/90 mb-6">
              Our support team is here to assist you with any questions or concerns.
            </p>
            <button className="px-8 py-3 bg-white text-[#22C55E] rounded-lg hover:bg-white/90 transition-colors">
              Contact Support
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
