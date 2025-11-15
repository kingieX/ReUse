import { TokenDisplay } from "../TokenDisplay";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { MapPin, Gift, History, TrendingUp, Recycle, Calendar, Sparkles, Target } from "lucide-react";
import { Badge } from "../ui/badge";
import { LevelBadge, StreakCounter, DailyQuest, AchievementBadge } from "../GamificationElements";

interface DashboardProps {
  onNavigate: (page: string) => void;
  tokenBalance: number;
}

export function Dashboard({ onNavigate, tokenBalance }: DashboardProps) {
  const recentActivity = [
    {
      id: "1",
      type: "dropoff",
      location: "Asaba Recycling Hub",
      tokens: 50,
      date: "2 hours ago",
      status: "confirmed"
    },
    {
      id: "2",
      type: "reward",
      description: "₦100 Airtime Redeemed",
      tokens: -40,
      date: "1 day ago",
      status: "completed"
    },
    {
      id: "3",
      type: "dropoff",
      location: "Warri Eco Collection Point",
      tokens: 30,
      date: "3 days ago",
      status: "confirmed"
    }
  ];

  const dailyQuests = [
    { title: "Drop off recyclables", reward: 50, progress: 1, total: 1, completed: true },
    { title: "Refer a friend", reward: 100, progress: 0, total: 1, completed: false },
    { title: "Redeem a reward", reward: 25, progress: 0, total: 1, completed: false }
  ];

  const quickAchievements = [
    { 
      title: "First Steps", 
      description: "Complete your first drop-off", 
      icon: <Sparkles className="w-8 h-8" />, 
      unlocked: true 
    },
    { 
      title: "Eco Warrior", 
      description: "Recycle 10kg of materials", 
      icon: <Recycle className="w-8 h-8" />, 
      unlocked: true,
      progress: 100 
    },
    { 
      title: "Streak Master", 
      description: "Maintain a 7-day streak", 
      icon: <Target className="w-8 h-8" />, 
      unlocked: false,
      progress: 42
    }
  ];

  const actions = [
    {
      title: "Find Drop-off Points",
      description: "Locate nearby recycling centers",
      icon: <MapPin className="w-6 h-6" />,
      color: "from-[#22C55E] to-[#16A34A]",
      action: () => onNavigate("dropoff")
    },
    {
      title: "View Rewards",
      description: "See what you can redeem",
      icon: <Gift className="w-6 h-6" />,
      color: "from-[#FACC15] to-[#EAB308]",
      action: () => onNavigate("rewards")
    },
    {
      title: "Transaction History",
      description: "View all your activities",
      icon: <History className="w-6 h-6" />,
      color: "from-[#3B82F6] to-[#2563EB]",
      action: () => onNavigate("history")
    },
    {
      title: "Your Impact",
      description: "See your contribution",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-[#8B5CF6] to-[#7C3AED]",
      action: () => onNavigate("impact")
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="mb-2">Welcome back, Eco Champion! 🌱</h1>
          <p className="text-[#64748B]">Keep up the amazing work!</p>
        </div>

        {/* Gamification Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <LevelBadge level={5} currentXP={750} nextLevelXP={1000} />
          <StreakCounter days={3} />
          <TokenDisplay 
            balance={tokenBalance} 
            onRedeem={() => onNavigate("rewards")}
          />
        </div>

        {/* Daily Quests */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2>Daily Quests</h2>
            <span className="text-[#64748B]">Resets in 18h</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dailyQuests.map((quest, index) => (
              <DailyQuest key={index} {...quest} />
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {actions.map((action, index) => (
            <Card 
              key={index}
              className="cursor-pointer hover:shadow-lg transition-all group"
              onClick={action.action}
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {action.icon}
                </div>
                <h4 className="mb-1">{action.title}</h4>
                <p className="text-[#64748B]">{action.description}</p>
              </CardContent>
            </Card>
          ))}</div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest recycling transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          activity.type === 'dropoff' 
                            ? 'bg-[#22C55E]/10 text-[#22C55E]' 
                            : 'bg-[#FACC15]/10 text-[#FACC15]'
                        }`}>
                          {activity.type === 'dropoff' ? (
                            <Recycle className="w-5 h-5" />
                          ) : (
                            <Gift className="w-5 h-5" />
                          )}
                        </div>
                        <div>
                          <p>
                            {activity.type === 'dropoff' 
                              ? activity.location 
                              : activity.description
                            }
                          </p>
                          <div className="flex items-center gap-2 text-[#64748B] mt-1">
                            <Calendar className="w-3 h-3" />
                            <span>{activity.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={activity.tokens > 0 ? 'text-[#22C55E]' : 'text-[#64748B]'}>
                          {activity.tokens > 0 ? '+' : ''}{activity.tokens} tokens
                        </p>
                        <Badge variant={activity.status === 'confirmed' ? 'default' : 'secondary'} className="mt-1">
                          {activity.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full mt-4"
                  onClick={() => onNavigate("history")}
                >
                  View All Transactions
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Impact Meter */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Your Impact</CardTitle>
                <CardDescription>Contribution this month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#64748B]">Plastic Recycled</span>
                    <span>12kg</span>
                  </div>
                  <Progress value={60} className="h-2" />
                  <p className="text-[#64748B] mt-1">60% of monthly goal (20kg)</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#64748B]">CO₂ Saved</span>
                    <span>24kg</span>
                  </div>
                  <Progress value={75} className="h-2" />
                  <p className="text-[#64748B] mt-1">Equivalent to 5 trees planted</p>
                </div>

                <Card className="bg-gradient-to-br from-[#22C55E]/10 to-[#84CC16]/10 border-[#22C55E]/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#22C55E] flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p>Keep it up!</p>
                        <p className="text-[#64748B]">You're in the top 20% of recyclers</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Achievements */}
        <div>
          <h2 className="mb-4">Recent Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickAchievements.map((achievement, index) => (
              <AchievementBadge key={index} {...achievement} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}