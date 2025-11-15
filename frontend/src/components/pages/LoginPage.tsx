import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { Recycle } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface LoginPageProps {
  onLogin: () => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");

  const handleSendOTP = () => {
    if (phoneNumber.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }
    toast.success("OTP sent to your phone!");
    setStep("otp");
  };

  const handleVerifyOTP = () => {
    if (otp.length !== 6) {
      toast.error("Please enter the 6-digit OTP");
      return;
    }
    toast.success("Login successful!");
    onLogin();
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-[#22C55E]/10 to-[#84CC16]/10 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex w-20 h-20 rounded-full bg-gradient-to-br from-[#22C55E] to-[#84CC16] items-center justify-center mb-4">
            <Recycle className="w-10 h-10 text-white" />
          </div>
          <h2 className="mb-2">Welcome to ReUse</h2>
          <p className="text-[#64748B]">Sign in to start earning rewards</p>
        </div>

        <Card className="border-0 shadow-xl">
          <CardHeader>
            <CardTitle>{step === "phone" ? "Enter Your Phone Number" : "Verify OTP"}</CardTitle>
            <CardDescription>
              {step === "phone" 
                ? "We'll send you a verification code" 
                : `Enter the 6-digit code sent to ${phoneNumber}`
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {step === "phone" ? (
              <div className="space-y-4">
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
                <Button onClick={handleSendOTP} className="w-full" size="lg">
                  Send OTP
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Enter Verification Code</Label>
                  <div className="flex justify-center">
                    <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                </div>
                <Button onClick={handleVerifyOTP} className="w-full" size="lg">
                  Verify & Login
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => setStep("phone")} 
                  className="w-full"
                >
                  Change Phone Number
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <p className="text-center text-[#64748B] mt-6">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}
