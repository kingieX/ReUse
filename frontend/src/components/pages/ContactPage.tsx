import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      info: "support@reuse.ng",
      description: "For general inquiries and support",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      info: "+234 800 RECYCLE",
      description: "Monday - Friday, 9 AM - 5 PM WAT",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      info: "Ughelli, Delta State",
      description: "Our headquarters",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      info: "Mon - Fri: 9 AM - 5 PM",
      description: "Saturday: 10 AM - 2 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mb-12 text-center">
          <h1 className="mb-4">Get In Touch</h1>
          <p className="text-[#64748B] max-w-2xl mx-auto">
            Have questions, feedback, or need assistance? We'd love to hear from
            you. Our team is here to help!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <Card key={index} className="border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#22C55E]/10 flex items-center justify-center text-[#22C55E]">
                  {item.icon}
                </div>
                <h4 className="mb-2">{item.title}</h4>
                <p className="mb-1">{item.info}</p>
                <p className="text-[#64748B]">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="mb-6">
                <h2 className="mb-2">Send Us a Message</h2>
                <p className="text-[#64748B]">
                  Fill out the form and we'll respond within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name*</Label>
                  <Input id="name" required placeholder="John Doe" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address*</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="flex gap-2">
                    <div className="w-20 px-3 py-2 rounded-lg border bg-[#F9FAFB] flex items-center justify-center">
                      +234
                    </div>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="8012345678"
                      maxLength={10}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject*</Label>
                  <select
                    id="subject"
                    required
                    className="w-full px-3 py-2 rounded-lg border bg-[#F9FAFB]"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="complaint">Complaint</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message*</Label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Map & Additional Info */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="h-[300px] bg-gradient-to-br from-[#22C55E]/20 to-[#84CC16]/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#22C55E] mx-auto mb-3" />
                    {/* <p className="text-[#64748B]">25 Nnebisi Road</p> */}
                    <p className="text-[#64748B]">
                      Ughelli, Delta State, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Support */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-[#22C55E] to-[#16A34A]">
              <CardContent className="p-8">
                <h3 className="text-white mb-4">Need Immediate Help?</h3>
                <p className="text-white/90 mb-6">
                  Check out our FAQs for instant answers to common questions, or
                  chat with our support team during business hours.
                </p>
                <div className="space-y-3">
                  <button className="w-full px-6 py-3 bg-white text-[#22C55E] rounded-lg hover:bg-white/90 transition-colors">
                    View FAQs
                  </button>
                  <button className="w-full px-6 py-3 bg-white/20 text-white border border-white rounded-lg hover:bg-white/30 transition-colors">
                    Live Chat Support
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h4 className="mb-4">What to Expect</h4>
                <ul className="space-y-3 text-[#64748B]">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Email responses within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Phone support during business hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Live chat available Mon-Fri, 9 AM - 5 PM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Emergency support for critical issues</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
