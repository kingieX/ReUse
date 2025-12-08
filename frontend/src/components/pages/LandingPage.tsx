import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import {
  Recycle,
  MapPin,
  Coins,
  Gift,
  TrendingUp,
  Users,
  Package,
} from "lucide-react";

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const steps = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Find Drop-off Point",
      description:
        "Locate nearby verified recycling centers on our interactive map",
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Drop Recyclables",
      description:
        "Bring your plastic, glass, or metal recyclables to the center",
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Earn Tokens",
      description: "Get instant tokens credited to your account",
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Redeem Rewards",
      description: "Exchange tokens for airtime, data, or cash",
    },
  ];

  const stats = [
    {
      label: "Plastic Diverted",
      value: "500kg+",
      icon: <Package className="w-6 h-6" />,
    },
    {
      label: "Active Users",
      value: "2,500+",
      icon: <Users className="w-6 h-6" />,
    },
    {
      label: "Tokens Earned",
      value: "50,000+",
      icon: <Coins className="w-6 h-6" />,
    },
    {
      label: "CO₂ Saved",
      value: "1.2 tons",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#22C55E] to-[#16A34A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-white">
              Turn Your Recyclables into Rewards
            </h1>
            <p className="mb-8 text-white/90 max-w-2xl mx-auto">
              Join Nigeria's leading smart recycling platform. Drop off your
              recyclables at verified points, earn tokens instantly, and redeem
              them for airtime, data, or cash.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => onNavigate("login")}
                className="bg-white text-[#22C55E] hover:bg-white/90"
              >
                Start Recycling
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate("impact")}
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">How It Works</h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              Four simple steps to turn your recyclables into valuable rewards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#22C55E]/10 flex items-center justify-center text-[#22C55E]">
                    {step.icon}
                  </div>
                  <div className="w-8 h-8 mx-auto mb-3 rounded-full bg-[#22C55E] text-white flex items-center justify-center">
                    {index + 1}
                  </div>
                  <h4 className="mb-2">{step.title}</h4>
                  <p className="text-[#64748B]">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-24 bg-[#F3F4F6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Impact</h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              Together, we're making a real difference for our environment
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#22C55E]/10 flex items-center justify-center text-[#22C55E]">
                    {stat.icon}
                  </div>
                  <h3 className="mb-1">{stat.value}</h3>
                  <p className="text-[#64748B]">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-[#22C55E] to-[#16A34A] border-0 shadow-xl">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-white mb-4">Ready to Make a Difference?</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of Nigerians who are earning rewards while
                building a sustainable future.
              </p>
              <Button
                size="lg"
                onClick={() => onNavigate("signup")}
                className="bg-white text-[#22C55E] hover:bg-white/90"
              >
                Get Started Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
