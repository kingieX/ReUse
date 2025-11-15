import { motion } from "motion/react";
import { Trophy, Star, Zap, Target, Gift, Medal } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";

interface LevelBadgeProps {
  level: number;
  currentXP: number;
  nextLevelXP: number;
}

export function LevelBadge({ level, currentXP, nextLevelXP }: LevelBadgeProps) {
  const progress = (currentXP / nextLevelXP) * 100;
  
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-gradient-to-br from-[#FACC15] to-[#F59E0B] border-0">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-white">Level {level}</span>
                <span className="text-white/80">{currentXP}/{nextLevelXP} XP</span>
              </div>
              <Progress value={progress} className="h-2 bg-white/20" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface StreakCounterProps {
  days: number;
}

export function StreakCounter({ days }: StreakCounterProps) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-gradient-to-br from-[#F97316] to-[#EA580C] border-0">
        <CardContent className="p-4 text-center">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
          >
            <Zap className="w-8 h-8 text-white mx-auto mb-2" />
          </motion.div>
          <div className="text-white">
            <h2 className="text-white mb-1">{days}</h2>
            <p className="text-white/90">Day Streak! 🔥</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface AchievementBadgeProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  unlocked: boolean;
  progress?: number;
}

export function AchievementBadge({ title, description, icon, unlocked, progress }: AchievementBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Card className={`border-2 transition-all ${unlocked ? 'border-[#22C55E] bg-[#22C55E]/5' : 'border-gray-200 opacity-60'}`}>
        <CardContent className="p-4 text-center">
          <motion.div
            initial={unlocked ? { scale: 0 } : {}}
            animate={unlocked ? { scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 200 }}
            className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center ${
              unlocked ? 'bg-gradient-to-br from-[#22C55E] to-[#16A34A]' : 'bg-gray-200'
            }`}
          >
            <div className={unlocked ? 'text-white' : 'text-gray-400'}>
              {icon}
            </div>
          </motion.div>
          <h4 className="mb-1">{title}</h4>
          <p className="text-[#64748B] mb-2">{description}</p>
          {!unlocked && progress !== undefined && (
            <div className="mt-3">
              <Progress value={progress} className="h-2" />
              <p className="text-[#64748B] mt-1">{progress}%</p>
            </div>
          )}
          {unlocked && (
            <span className="text-[#22C55E]">✓ Unlocked!</span>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface DailyQuestProps {
  title: string;
  reward: number;
  progress: number;
  total: number;
  completed: boolean;
}

export function DailyQuest({ title, reward, progress, total, completed }: DailyQuestProps) {
  const percentage = (progress / total) * 100;

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      whileHover={{ x: 5 }}
    >
      <Card className={completed ? "bg-[#22C55E]/10 border-[#22C55E]" : ""}>
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              completed ? 'bg-[#22C55E]' : 'bg-[#F3F4F6]'
            }`}>
              {completed ? (
                <Star className="w-5 h-5 text-white" />
              ) : (
                <Target className="w-5 h-5 text-[#64748B]" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="mb-1">{title}</h4>
                  <p className="text-[#64748B]">{progress}/{total} completed</p>
                </div>
                <div className="flex items-center gap-1 text-[#FACC15]">
                  <Gift className="w-4 h-4" />
                  <span>+{reward}</span>
                </div>
              </div>
              {!completed && <Progress value={percentage} className="h-2" />}
              {completed && (
                <span className="text-[#22C55E]">✓ Quest Completed!</span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface LeaderboardEntryProps {
  rank: number;
  name: string;
  points: number;
  isCurrentUser?: boolean;
}

export function LeaderboardEntry({ rank, name, points, isCurrentUser }: LeaderboardEntryProps) {
  const getMedalIcon = () => {
    if (rank === 1) return <Medal className="w-6 h-6 text-[#FFD700]" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-[#C0C0C0]" />;
    if (rank === 3) return <Medal className="w-6 h-6 text-[#CD7F32]" />;
    return null;
  };

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: rank * 0.05 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className={`${isCurrentUser ? 'bg-[#22C55E]/10 border-[#22C55E]' : ''}`}>
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="w-12 text-center">
              {rank <= 3 ? (
                getMedalIcon()
              ) : (
                <span className="text-[#64748B]">#{rank}</span>
              )}
            </div>
            <div className="flex-1">
              <h4 className="mb-0">{name} {isCurrentUser && '(You)'}</h4>
            </div>
            <div className="flex items-center gap-1">
              <Trophy className="w-4 h-4 text-[#FACC15]" />
              <span>{points.toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface TokenAnimationProps {
  value: number;
}

export function TokenAnimation({ value }: TokenAnimationProps) {
  return (
    <motion.div
      initial={{ scale: 0, y: 50 }}
      animate={{ scale: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15
      }}
      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FACC15] to-[#FDE047] rounded-full shadow-lg"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <Gift className="w-5 h-5 text-[#14532D]" />
      </motion.div>
      <span className="text-[#14532D]">+{value} Tokens</span>
    </motion.div>
  );
}

export function CelebrationAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1
          }}
          animate={{
            x: Math.random() * 400 - 200,
            y: Math.random() * 400 - 200,
            opacity: 0,
            scale: 0
          }}
          transition={{
            duration: 1 + Math.random(),
            ease: "easeOut"
          }}
          className="absolute"
        >
          <Star className="w-6 h-6 text-[#FACC15]" />
        </motion.div>
      ))}
    </div>
  );
}
