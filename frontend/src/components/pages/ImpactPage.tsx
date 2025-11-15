import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";
import { Leaf, Recycle, TreePine, Droplets, TrendingUp, Award } from "lucide-react";

export function ImpactPage() {
  const impactStats = [
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Total Recycled",
      value: "12kg",
      description: "Plastic waste diverted from landfills",
      color: "from-[#22C55E] to-[#16A34A]"
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Trees Saved",
      value: "5",
      description: "Equivalent in CO₂ reduction",
      color: "from-[#10B981] to-[#059669]"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Water Saved",
      value: "180L",
      description: "Through recycling processes",
      color: "from-[#3B82F6] to-[#2563EB]"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "CO₂ Reduced",
      value: "24kg",
      description: "Carbon emissions prevented",
      color: "from-[#84CC16] to-[#65A30D]"
    }
  ];

  const milestones = [
    { title: "First Drop-off", description: "Completed your first recycling", achieved: true },
    { title: "Eco Warrior", description: "Recycled 10kg of materials", achieved: true },
    { title: "Community Leader", description: "50 drop-offs completed", achieved: false },
    { title: "Green Champion", description: "100kg recycled", achieved: false }
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4">Our Mission: Building a Circular Economy</h1>
          <p className="text-[#64748B] max-w-3xl mx-auto">
            Every recyclable you drop off contributes to a cleaner Nigeria and a healthier planet. 
            Together, we're transforming waste into value and creating sustainable communities.
          </p>
        </div>

        {/* Personal Impact Stats */}
        <div className="mb-12">
          <h2 className="mb-6 text-center">Your Personal Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-md overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${stat.color}`} />
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white`}>
                    {stat.icon}
                  </div>
                  <h3 className="mb-1">{stat.value}</h3>
                  <h4 className="mb-2">{stat.title}</h4>
                  <p className="text-[#64748B]">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How Every Bottle Counts */}
        <div className="mb-12">
          <Card className="bg-gradient-to-br from-[#22C55E] to-[#16A34A] border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-white mb-8 text-center">How Every Bottle Counts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center text-white">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                    <Recycle className="w-8 h-8" />
                  </div>
                  <h4 className="mb-2 text-white">Collection</h4>
                  <p className="text-[#64748B] mb-4">
                    Recyclables are collected at verified drop-off points across Delta State
                  </p>
                </div>
                <div className="text-center text-white">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <h4 className="mb-2 text-white">Processing</h4>
                  <p className="text-white/90">
                    Materials are sorted and processed by certified recycling partners
                  </p>
                </div>
                <div className="text-center text-white">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                    <Leaf className="w-8 h-8" />
                  </div>
                  <h4 className="mb-2 text-white">Impact</h4>
                  <p className="text-white/90">
                    Recycled materials reduce pollution and conserve natural resources
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Milestones */}
        <div className="mb-12">
          <h2 className="mb-6">Your Milestones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className={milestone.achieved ? "border-[#22C55E]" : ""}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      milestone.achieved 
                        ? "bg-[#22C55E] text-white" 
                        : "bg-[#F3F4F6] text-[#64748B]"
                    }`}>
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-1">{milestone.title}</h4>
                      <p className="text-[#64748B] mb-3">{milestone.description}</p>
                      {milestone.achieved ? (
                        <span className="text-[#22C55E]">✓ Achieved</span>
                      ) : (
                        <div>
                          <Progress value={45} className="h-2 mb-2" />
                          <p className="text-[#64748B]">45% Complete</p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Impact */}
        <div className="mb-12">
          <h2 className="mb-6 text-center">Community Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <h2 className="text-[#22C55E] mb-2">500kg+</h2>
                <p className="text-[#64748B]">Total plastic diverted from landfills</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h2 className="text-[#FACC15] mb-2">2,500+</h2>
                <p className="text-[#64748B]">Active community recyclers</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h2 className="text-[#3B82F6] mb-2">50,000+</h2>
                <p className="text-[#64748B]">Tokens earned by our community</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-br from-[#14532D] to-[#166534] border-0 shadow-xl">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-white mb-4">Want to Partner With Us?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Join our network of recycling partners and help us expand our impact across Nigeria.
            </p>
            <button className="px-8 py-3 bg-white text-[#14532D] rounded-lg hover:bg-white/90 transition-colors">
              Become a Partner
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}