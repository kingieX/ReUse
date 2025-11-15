import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  Building2,
  Handshake,
  TrendingUp,
  Shield,
  CheckCircle,
} from "lucide-react";
import { toast } from "sonner";

export function PartnersPage() {
  const partnerTypes = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Recycling Centers",
      description:
        "Join our network of verified drop-off points and reach more customers",
      benefits: [
        "Increased foot traffic",
        "Digital presence",
        "Quality assurance badge",
      ],
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Corporate Partners",
      description: "Integrate sustainability into your CSR programs",
      benefits: ["Employee engagement", "Brand visibility", "Impact reporting"],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Reward Providers",
      description: "Offer your services as rewards to our growing user base",
      benefits: [
        "New customer acquisition",
        "Brand exposure",
        "Performance tracking",
      ],
    },
  ];

  const currentPartners = [
    { name: "MTN Nigeria", category: "Telecom Partner" },
    { name: "Airtel Nigeria", category: "Telecom Partner" },
    { name: "Delta Waste Management", category: "Recycling Partner" },
    { name: "EcoBank Nigeria", category: "Financial Partner" },
    { name: "Green Africa Initiative", category: "NGO Partner" },
    { name: "Delta Innovation Hub", category: "Technology Partner" },
  ];

  const benefits = [
    "Access to a growing community of environmentally conscious consumers",
    "Brand association with sustainability and social impact",
    "Real-time analytics and impact reporting",
    "Marketing support and co-branding opportunities",
    "Dedicated account management",
    "Integration support and technical assistance",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      "Partnership inquiry submitted! We'll contact you within 48 hours."
    );
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mb-16 text-center">
          <h1 className="mb-4">Partner With ReUse</h1>
          <p className="text-[#64748B] max-w-3xl mx-auto">
            Join Nigeria's leading smart recycling platform and help us build a
            sustainable future while growing your business.
          </p>
        </div>

        {/* Partner Types */}
        <div className="mb-16">
          <h2 className="mb-8 text-center">Partnership Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#22C55E]/10 flex items-center justify-center text-[#22C55E] mb-6">
                    {type.icon}
                  </div>
                  <h3 className="mb-3">{type.title}</h3>
                  <p className="text-[#64748B] mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-[#64748B]"
                      >
                        <CheckCircle className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Partner */}
        <div className="mb-16">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="mb-6">Why Partner With Us?</h2>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#22C55E] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-[#64748B]">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-[#22C55E] to-[#16A34A] rounded-2xl p-8 text-white">
                  <h3 className="text-white mb-6">By The Numbers</h3>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-white mb-1">2,500+</h2>
                      <p className="text-white/90">Active Users</p>
                    </div>
                    <div>
                      <h2 className="text-white mb-1">500kg+</h2>
                      <p className="text-white/90">Waste Processed Monthly</p>
                    </div>
                    <div>
                      <h2 className="text-white mb-1">15+</h2>
                      <p className="text-white/90">Drop-off Locations</p>
                    </div>
                    <div>
                      <h2 className="text-white mb-1">95%</h2>
                      <p className="text-white/90">User Satisfaction Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Partners */}
        {/* <div className="mb-16">
          <h2 className="mb-8 text-center">Our Current Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {currentPartners.map((partner, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[#F3F4F6] flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-[#64748B]" />
                  </div>
                  <h4 className="mb-1">{partner.name}</h4>
                  <p className="text-[#64748B]">{partner.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Partnership Inquiry Form */}
        <Card className="border-0 shadow-xl max-w-3xl mx-auto">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#22C55E]/10 flex items-center justify-center">
                <Shield className="w-8 h-8 text-[#22C55E]" />
              </div>
              <h2 className="mb-2">Become a Partner</h2>
              <p className="text-[#64748B]">
                Fill out the form below and we'll get back to you within 48
                hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name*</Label>
                  <Input id="company" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Contact Person*</Label>
                  <Input id="name" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address*</Label>
                  <Input id="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number*</Label>
                  <Input id="phone" type="tel" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="partnership">Partnership Type*</Label>
                <select
                  id="partnership"
                  required
                  className="w-full px-3 py-2 rounded-lg border bg-[#F9FAFB]"
                >
                  <option value="">Select partnership type</option>
                  <option value="recycling">Recycling Center</option>
                  <option value="corporate">Corporate Partner</option>
                  <option value="reward">Reward Provider</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell us about your interest*</Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Describe your company and what you hope to achieve through partnership..."
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Submit Partnership Inquiry
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
