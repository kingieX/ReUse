import { Card, CardContent } from "../ui/card";
import { Recycle, Target, Eye, Users, Heart } from "lucide-react";

export function AboutPage() {
  const team = [
    { name: "Adewale Johnson", role: "CEO & Founder", description: "Environmental advocate with 10+ years experience" },
    { name: "Chioma Okafor", role: "CTO", description: "Tech innovator passionate about sustainability" },
    { name: "Ibrahim Musa", role: "Operations Manager", description: "Logistics expert in waste management" },
    { name: "Ngozi Eze", role: "Community Lead", description: "Building recycling communities across Nigeria" }
  ];

  const values = [
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Sustainability",
      description: "We're committed to creating a circular economy where waste becomes a valuable resource"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Building a movement of conscious citizens working together for a cleaner Nigeria"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Impact",
      description: "Every action counts. We measure and celebrate the environmental difference we make"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "Using technology to make recycling accessible, rewarding, and fun for everyone"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-4">About ReUse</h1>
          <p className="text-[#64748B] max-w-3xl mx-auto">
            We're on a mission to transform Nigeria's waste management landscape by making recycling 
            accessible, rewarding, and impactful for everyone.
          </p>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="mb-4">Our Story</h2>
                  <p className="text-[#64748B] mb-4">
                    ReUse was born from a simple observation: Nigeria generates millions of tons of 
                    recyclable waste every year, yet most of it ends up in landfills or polluting our 
                    environment.
                  </p>
                  <p className="text-[#64748B] mb-4">
                    We saw an opportunity to change this narrative by creating a platform that rewards 
                    people for doing the right thing. By combining technology with community engagement, 
                    we're making recycling not just easy, but financially beneficial.
                  </p>
                  <p className="text-[#64748B]">
                    Today, we're proud to work with thousands of Nigerians who are turning their 
                    recyclables into rewards while building a sustainable future for the next generation.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#22C55E] to-[#16A34A] rounded-2xl p-8 text-white">
                  <h3 className="text-white mb-6">Our Journey</h3>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-white mb-1">2024</h2>
                      <p className="text-white/90">Founded in Asaba</p>
                    </div>
                    <div>
                      <h2 className="text-white mb-1">2,500+</h2>
                      <p className="text-white/90">Active Recyclers</p>
                    </div>
                    <div>
                      <h2 className="text-white mb-1">15+</h2>
                      <p className="text-white/90">Drop-off Locations Across Delta</p>
                    </div>
                    <div>
                      <h2 className="text-white mb-1">500kg+</h2>
                      <p className="text-white/90">Waste Diverted Monthly</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-2xl bg-[#22C55E]/10 flex items-center justify-center text-[#22C55E] mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="mb-4">Our Mission</h3>
              <p className="text-[#64748B]">
                To create a sustainable waste management ecosystem in Nigeria by empowering citizens 
                to recycle through technology, incentives, and education. We aim to divert at least 
                10,000 tons of waste from landfills by 2026.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-2xl bg-[#FACC15]/10 flex items-center justify-center text-[#FACC15] mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="mb-4">Our Vision</h3>
              <p className="text-[#64748B]">
                A Nigeria where recycling is second nature, where waste is seen as a resource, and 
                where every citizen actively participates in building a circular economy for a 
                cleaner, greener future.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#22C55E]/10 flex items-center justify-center text-[#22C55E]">
                    {value.icon}
                  </div>
                  <h4 className="mb-2">{value.title}</h4>
                  <p className="text-[#64748B]">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#22C55E] to-[#16A34A] flex items-center justify-center text-white">
                    <Users className="w-10 h-10" />
                  </div>
                  <h4 className="mb-1">{member.name}</h4>
                  <p className="text-[#22C55E] mb-2">{member.role}</p>
                  <p className="text-[#64748B]">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-br from-[#22C55E] to-[#16A34A] border-0 shadow-xl">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-white mb-4">Join Our Mission</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you're a recycler, partner, or investor, there's a place for you in building 
              Nigeria's sustainable future.
            </p>
            <button className="px-8 py-3 bg-white text-[#22C55E] rounded-lg hover:bg-white/90 transition-colors">
              Get Involved
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}