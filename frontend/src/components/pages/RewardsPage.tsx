import { useState } from "react";
import { TokenDisplay } from "../TokenDisplay";
import { RewardCard, Reward } from "../RewardCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { CheckCircle, Sparkles } from "lucide-react";
import { toast } from "sonner";

interface RewardsPageProps {
  tokenBalance: number;
  onNavigate: (page: string) => void;
}

export function RewardsPage({ tokenBalance, onNavigate }: RewardsPageProps) {
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null);
  const [showRedeemDialog, setShowRedeemDialog] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const airtimeRewards: Reward[] = [
    {
      id: "a1",
      type: "airtime",
      amount: "₦100 Airtime",
      tokensRequired: 40,
      provider: "All Networks",
    },
    {
      id: "a2",
      type: "airtime",
      amount: "₦200 Airtime",
      tokensRequired: 75,
      provider: "All Networks",
    },
    {
      id: "a3",
      type: "airtime",
      amount: "₦500 Airtime",
      tokensRequired: 180,
      provider: "All Networks",
    },
    {
      id: "a4",
      type: "airtime",
      amount: "₦1000 Airtime",
      tokensRequired: 350,
      provider: "All Networks",
    },
  ];

  const dataRewards: Reward[] = [
    {
      id: "d1",
      type: "data",
      amount: "500MB Data",
      tokensRequired: 50,
      provider: "MTN",
    },
    {
      id: "d2",
      type: "data",
      amount: "1GB Data",
      tokensRequired: 90,
      provider: "MTN",
    },
    {
      id: "d3",
      type: "data",
      amount: "2GB Data",
      tokensRequired: 170,
      provider: "MTN",
    },
    {
      id: "d4",
      type: "data",
      amount: "500MB Data",
      tokensRequired: 50,
      provider: "Airtel",
    },
    {
      id: "d5",
      type: "data",
      amount: "1GB Data",
      tokensRequired: 90,
      provider: "Airtel",
    },
    {
      id: "d6",
      type: "data",
      amount: "2GB Data",
      tokensRequired: 170,
      provider: "Airtel",
    },
  ];

  const cashRewards: Reward[] = [
    {
      id: "c1",
      type: "cash",
      amount: "₦500 Cash",
      tokensRequired: 200,
      provider: "Bank Transfer",
    },
    {
      id: "c2",
      type: "cash",
      amount: "₦1000 Cash",
      tokensRequired: 380,
      provider: "Bank Transfer",
    },
    {
      id: "c3",
      type: "cash",
      amount: "₦2000 Cash",
      tokensRequired: 750,
      provider: "Bank Transfer",
    },
    {
      id: "c4",
      type: "cash",
      amount: "₦5000 Cash",
      tokensRequired: 1800,
      provider: "Bank Transfer",
    },
  ];

  const handleRedeemClick = (reward: Reward) => {
    if (tokenBalance < reward.tokensRequired) {
      toast.error("Insufficient tokens for this reward");
      return;
    }
    setSelectedReward(reward);
    setShowRedeemDialog(true);
  };

  const handleConfirmRedeem = () => {
    if (!phoneNumber && selectedReward?.type !== "cash") {
      toast.error("Please enter your phone number");
      return;
    }
    setShowRedeemDialog(false);
    setTimeout(() => {
      setShowSuccessDialog(true);
    }, 500);
  };

  const handleSuccessClose = () => {
    setShowSuccessDialog(false);
    setSelectedReward(null);
    setPhoneNumber("");
    toast.success("Reward redeemed successfully!");
    onNavigate("home");
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="mb-2">Rewards Catalog</h1>
          <p className="text-[#64748B]">
            Redeem your tokens for exciting rewards
          </p>
        </div>

        {/* Token Balance */}
        <div className="mb-8">
          <TokenDisplay balance={tokenBalance} variant="compact" />
        </div>

        {/* Rewards Tabs */}
        <Tabs defaultValue="airtime" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="airtime">Airtime</TabsTrigger>
            <TabsTrigger value="data">Data</TabsTrigger>
            <TabsTrigger value="cash">Cash</TabsTrigger>
          </TabsList>

          <TabsContent value="airtime" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {airtimeRewards.map((reward) => (
                <RewardCard
                  key={reward.id}
                  reward={reward}
                  userBalance={tokenBalance}
                  onRedeem={handleRedeemClick}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="data" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dataRewards.map((reward) => (
                <RewardCard
                  key={reward.id}
                  reward={reward}
                  userBalance={tokenBalance}
                  onRedeem={handleRedeemClick}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cash" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cashRewards.map((reward) => (
                <RewardCard
                  key={reward.id}
                  reward={reward}
                  userBalance={tokenBalance}
                  onRedeem={handleRedeemClick}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Redeem Confirmation Dialog */}
      <Dialog open={showRedeemDialog} onOpenChange={setShowRedeemDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Redemption</DialogTitle>
            <DialogDescription>
              You're about to redeem {selectedReward?.amount}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-[#F3F4F6]">
              <div className="flex justify-between mb-2">
                <span className="text-[#64748B]">Reward:</span>
                <span>{selectedReward?.amount}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-[#64748B]">Cost:</span>
                <span className="text-[#FACC15]">
                  {selectedReward?.tokensRequired} Tokens
                </span>
              </div>
              <div className="flex justify-between border-t pt-2 mt-2">
                <span className="text-[#64748B]">Remaining Balance:</span>
                <span>
                  {tokenBalance - (selectedReward?.tokensRequired || 0)} Tokens
                </span>
              </div>
            </div>

            {selectedReward?.type !== "cash" && (
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
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    maxLength={10}
                  />
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setShowRedeemDialog(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button onClick={handleConfirmRedeem} className="flex-1">
                Confirm Redemption
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FACC15] to-[#EAB308] flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <DialogHeader>
              <DialogTitle>Reward Redeemed! 🎉</DialogTitle>
              <DialogDescription>
                Your {selectedReward?.amount} will be processed within 5 minutes
              </DialogDescription>
            </DialogHeader>
            <div className="my-6 p-4 rounded-lg bg-[#F3F4F6]">
              <div className="flex items-center justify-center gap-2 text-[#22C55E]">
                <CheckCircle className="w-5 h-5" />
                <p>Redemption Successful</p>
              </div>
            </div>
            <Button onClick={handleSuccessClose} className="w-full">
              Back to Dashboard
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
