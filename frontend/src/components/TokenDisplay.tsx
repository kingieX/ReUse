import { Coins } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

interface TokenDisplayProps {
  balance: number;
  onRedeem?: () => void;
  variant?: "compact" | "full";
}

export function TokenDisplay({ balance, onRedeem, variant = "full" }: TokenDisplayProps) {
  if (variant === "compact") {
    return (
      <div className="flex items-center gap-2 bg-gradient-to-r from-[#FACC15] to-[#FDE047] px-4 py-2 rounded-full">
        <Coins className="w-5 h-5 text-[#14532D]" />
        <span className="text-[#14532D]">{balance.toLocaleString()} Tokens</span>
      </div>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-[#22C55E] to-[#16A34A] border-0 shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/80 mb-2">Your Token Balance</p>
            <div className="flex items-center gap-3">
              <Coins className="w-8 h-8 text-[#FACC15]" />
              <h2 className="text-white">{balance.toLocaleString()} Tokens</h2>
            </div>
          </div>
          {onRedeem && (
            <Button 
              onClick={onRedeem}
              className="bg-white text-[#22C55E] hover:bg-white/90"
            >
              Redeem Now
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
