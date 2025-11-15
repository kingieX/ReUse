import { Card, CardContent } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { LeaderboardEntry } from "../GamificationElements";
import { Trophy, TrendingUp, Flame, Users } from "lucide-react";

export function LeaderboardPage() {
  const weeklyLeaders = [
    { rank: 1, name: "Chukwu Emeka", points: 2580, isCurrentUser: false },
    { rank: 2, name: "Amina Ibrahim", points: 2150, isCurrentUser: false },
    { rank: 3, name: "Adeola Femi", points: 1890, isCurrentUser: false },
    { rank: 4, name: "You", points: 1650, isCurrentUser: true },
    { rank: 5, name: "Ngozi Obi", points: 1420, isCurrentUser: false },
    { rank: 6, name: "Tunde Williams", points: 1280, isCurrentUser: false },
    { rank: 7, name: "Blessing Okoro", points: 1150, isCurrentUser: false },
    { rank: 8, name: "Ibrahim Sule", points: 980, isCurrentUser: false },
    { rank: 9, name: "Joy Adekunle", points: 850, isCurrentUser: false },
    { rank: 10, name: "Daniel Okon", points: 720, isCurrentUser: false }
  ];

  const monthlyLeaders = [
    { rank: 1, name: "Amina Ibrahim", points: 8950, isCurrentUser: false },
    { rank: 2, name: "Chukwu Emeka", points: 8320, isCurrentUser: false },
    { rank: 3, name: "Adeola Femi", points: 7680, isCurrentUser: false },
    { rank: 4, name: "Blessing Okoro", points: 6890, isCurrentUser: false },
    { rank: 5, name: "You", points: 6250, isCurrentUser: true },
    { rank: 6, name: "Tunde Williams", points: 5940, isCurrentUser: false },
    { rank: 7, name: "Ibrahim Sule", points: 5320, isCurrentUser: false },
    { rank: 8, name: "Ngozi Obi", points: 4890, isCurrentUser: false },
    { rank: 9, name: "Joy Adekunle", points: 4250, isCurrentUser: false },
    { rank: 10, name: "Daniel Okon", points: 3890, isCurrentUser: false }
  ];

  const allTimeLeaders = [
    { rank: 1, name: "Amina Ibrahim", points: 45890, isCurrentUser: false },
    { rank: 2, name: "Chukwu Emeka", points: 42150, isCurrentUser: false },
    { rank: 3, name: "Adeola Femi", points: 38920, isCurrentUser: false },
    { rank: 4, name: "Tunde Williams", points: 35680, isCurrentUser: false },
    { rank: 5, name: "Blessing Okoro", points: 32450, isCurrentUser: false },
    { rank: 6, name: "Ibrahim Sule", points: 29870, isCurrentUser: false },
    { rank: 7, name: "You", points: 27340, isCurrentUser: true },
    { rank: 8, name: "Ngozi Obi", points: 24680, isCurrentUser: false },
    { rank: 9, name: "Joy Adekunle", points: 21950, isCurrentUser: false },
    { rank: 10, name: "Daniel Okon", points: 19420, isCurrentUser: false }
  ];

  const stats = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Your Rank",
      value: "#4",
      description: "This Week",
      color: "from-[#FACC15] to-[#F59E0B]"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Points Earned",
      value: "1,650",
      description: "Last 7 Days",
      color: "from-[#22C55E] to-[#16A34A]"
    },
    {
      icon: <Flame className="w-6 h-6" />,
      title: "Best Streak",
      value: "7 Days",
      description: "Personal Record",
      color: "from-[#F97316] to-[#EA580C]"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Active Users",
      value: "2,500+",
      description: "In Your Region",
      color: "from-[#3B82F6] to-[#2563EB]"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mb-12 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FACC15]/10 flex items-center justify-center">
            <Trophy className="w-8 h-8 text-[#FACC15]" />
          </div>
          <h1 className="mb-4">Leaderboard</h1>
          <p className="text-[#64748B] max-w-2xl mx-auto">
            See how you rank among the top recyclers in Delta State! 🏆
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-md overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${stat.color}`} />
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white`}>
                  {stat.icon}
                </div>
                <h2 className="mb-1">{stat.value}</h2>
                <h4 className="mb-1">{stat.title}</h4>
                <p className="text-[#64748B]">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leaderboard Tabs */}
        <Card className="border-0 shadow-xl">
          <CardContent className="p-6 md:p-8">
            <Tabs defaultValue="weekly" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="weekly">This Week</TabsTrigger>
                <TabsTrigger value="monthly">This Month</TabsTrigger>
                <TabsTrigger value="alltime">All Time</TabsTrigger>
              </TabsList>

              <TabsContent value="weekly" className="space-y-3">
                {weeklyLeaders.map((leader) => (
                  <LeaderboardEntry key={leader.rank} {...leader} />
                ))}
              </TabsContent>

              <TabsContent value="monthly" className="space-y-3">
                {monthlyLeaders.map((leader) => (
                  <LeaderboardEntry key={leader.rank} {...leader} />
                ))}
              </TabsContent>

              <TabsContent value="alltime" className="space-y-3">
                {allTimeLeaders.map((leader) => (
                  <LeaderboardEntry key={leader.rank} {...leader} />
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Motivation Card */}
        <Card className="mt-8 bg-gradient-to-br from-[#22C55E] to-[#16A34A] border-0 shadow-xl">
          <CardContent className="p-8 text-center">
            <h2 className="text-white mb-4">Climb the Rankings! 🚀</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Keep recycling to earn more points and climb to the top. Every drop-off counts towards 
              making Delta State greener and earning you awesome rewards!
            </p>
            <div className="inline-flex gap-3">
              <button className="px-6 py-3 bg-white text-[#22C55E] rounded-lg hover:bg-white/90 transition-colors">
                Drop Off Now
              </button>
              <button className="px-6 py-3 bg-white/20 text-white border border-white rounded-lg hover:bg-white/30 transition-colors">
                Invite Friends
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
