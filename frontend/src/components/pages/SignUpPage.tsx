import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { Recycle } from "lucide-react";

export function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!name) return toast.error("Enter your name");
    if (!email) return toast.error("Enter your email");
    if (!phone) return toast.error("Enter your phone number");
    if (!password) return toast.error("Create a password");

    toast.success("Account created! Please log in.");
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-[#22C55E]/10 to-[#84CC16]/10 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex w-20 h-20 rounded-full bg-gradient-to-br from-[#22C55E] to-[#84CC16] items-center justify-center mb-4">
            <Recycle className="w-10 h-10 text-white" />
          </div>
          <h2 className="mb-2">Create Your ReUse Account</h2>
          <p className="text-[#64748B]">
            Start recycling and earning rewards today
          </p>
        </div>

        <Card className="border-0 shadow-xl">
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              Fill in your details to create an account
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Phone Number</Label>
              <div className="flex gap-2">
                <div className="w-20 px-3 py-2 rounded-lg border bg-[#F9FAFB] flex items-center justify-center">
                  +234
                </div>
                <Input
                  type="tel"
                  placeholder="8012345678"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button onClick={handleSignup} className="w-full" size="lg">
              Create Account
            </Button>
          </CardContent>
        </Card>

        <p className="text-center text-[#64748B] mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-[#22C55E] font-semibold">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
