import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Smartphone, Wifi, Banknote } from "lucide-react";

export interface Reward {
  id: string;
  type: "airtime" | "data" | "cash";
  amount: string;
  tokensRequired: number;
  provider?: string;
}

interface RewardCardProps {
  reward: Reward;
  userBalance: number;
  onRedeem?: (id: string) => void;
}

export function RewardCard({ reward, userBalance, onRedeem }: RewardCardProps) {
  const canAfford = userBalance >= reward.tokensRequired;

  const getIcon = () => {
    switch (reward.type) {
      case "airtime":
        return <Smartphone className="w-6 h-6" />;
      case "data":
        return <Wifi className="w-6 h-6" />;
      case "cash":
        return <Banknote className="w-6 h-6" />;
    }
  };

  return (
    <Card className={`transition-all hover:shadow-md ${
      !canAfford ? 'opacity-60' : ''
    }`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#22C55E]/10 flex items-center justify-center text-[#22C55E]">
              {getIcon()}
            </div>
            <div>
              <h4 className="mb-1">{reward.amount}</h4>
              {reward.provider && (
                <p className="text-[#64748B] mb-2">{reward.provider}</p>
              )}
              <div className="flex items-center gap-2">
                <span className="text-[#FACC15]">{reward.tokensRequired} Tokens</span>
              </div>
            </div>
          </div>

          {onRedeem && (
            <Button 
              onClick={() => onRedeem(reward.id)}
              disabled={!canAfford}
              size="sm"
            >
              Redeem
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
