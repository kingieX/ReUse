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
import { Link, useNavigate } from "react-router-dom"; // **UPDATED: Added useNavigate**
import { Recycle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "../ui/dialog"; // Assuming Dialog components exist here

// Helper function to generate a unique ID
function generateUID(): string {
  // Check for crypto API availability (standard in modern browsers)
  const cryptoAPI = window.crypto || (window as any).msCrypto;
  if (!cryptoAPI) {
    console.error("Crypto API not available. Cannot generate secure UID.");
    return Math.random().toString(36).substring(2, 10); // Fallback
  }

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const length = 8;

  const randomValues = cryptoAPI.getRandomValues(new Uint8Array(length));
  return Array.from(randomValues, (v) => chars[v % chars.length]).join("");
}

export function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // 	const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [submittedPhoneNumber, setSubmittedPhoneNumber] = useState(""); // New state to hold phone number for modal

  const navigate = useNavigate(); // **NEW: Initialize navigate hook**

  const handleModalOpenChange = (
    open: boolean | ((prevState: boolean) => boolean)
  ) => {
    setIsModalOpen(open);
    if (!open) {
      // **NEW: If the modal is closing (open is false), redirect to home**
      navigate("/");
    }
  };

  const handleSignup = async () => {
    // 1. Validation Checks
    if (isLoading) return;
    if (!name) return toast.error("Enter your name");
    if (!email) return toast.error("Enter your email");
    if (!phone) return toast.error("Enter your phone number");
    if (phone.length !== 10)
      return toast.error("Phone number must be 10 digits");
    // if (!password) return toast.error("Create a password");
    if (!location) return toast.error("Enter your location");

    setIsLoading(true);

    // 2. Data Preparation
    const nameParts = name.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    // Join the rest of the parts as lastName (handles multi-word last names)
    const lastName = nameParts.slice(1).join(" ") || "";
    const phoneNumber = `+234${phone}`; // Prepend country code

    // 3. userId Generation
    // Using firstName, lastName, and UUID
    const cleanFirstName = firstName.toLowerCase().replace(/[^a-z0-9]/g, "");
    const cleanLastName = lastName.toLowerCase().replace(/[^a-z0-9]/g, "");
    const baseNamePart = `${cleanFirstName}_${cleanLastName}`.replace(
      /_+$/,
      ""
    ); // Remove trailing underscore if lastName is empty
    const uniqueId = generateUID();
    const userId = `${baseNamePart}_${uniqueId}`;

    const payload = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      location: location,
      userId: userId, // The new required field
    };

    // 4. Send POST Request
    try {
      const response = await fetch(
        "https://hook.eu2.make.com/bovfe2dxip0rso3i6zd82c019d2517p1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok || response.status === 200) {
        // Show success toast
        toast.success(
          "Registration complete. Please check the popup for next steps."
        );

        // Capture phone number for modal BEFORE clearing input state
        setSubmittedPhoneNumber(phoneNumber);

        // Open the modal on successful submission
        setIsModalOpen(true);

        // Clear the form on successful submission
        setName("");
        setEmail("");
        setPhone("");
        setLocation("");
      } else {
        // Handle non-200 responses from the webhook
        const errorText = await response.text();
        console.error("Webhook submission failed:", response.status, errorText);
        toast.error("Failed to create account. Please try again later.");
      }
    } catch (error) {
      console.error("Network or Fetch error:", error);
      toast.error("Network error. Check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
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
                  onChange={(e) =>
                    setPhone(e.target.value.replace(/[^0-9]/g, ""))
                  } // Ensure only numbers are entered
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Location</Label>
              <Input
                type="location"
                placeholder="warri, delta state"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            {/* <div className="space-y-2">
							<Label>Password</Label>
							<Input
								type="password"
								placeholder="••••••••"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div> */}

            <Button
              onClick={handleSignup}
              className="w-full"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
          </CardContent>
        </Card>

        {/* <p className="text-center text-[#64748B] mt-6">
					Already have an account?{" "}
					<Link to="/login" className="text-[#22C55E] font-semibold">
						Sign In
					</Link>
				</p> */}
      </div>

      {/* WhatsApp Success Modal */}
      <Dialog open={isModalOpen} onOpenChange={handleModalOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-semibold">
              Success! You're In.
            </DialogTitle>
            <DialogDescription className="text-center">
              Your registration was successful. Here's what happens next.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 text-center">
            <Recycle className="w-12 h-12 text-[#22C55E] mx-auto mb-4" />
            <p className="text-lg font-semibold text-gray-700">
              You will be added to our WhatsApp community shortly!
            </p>
            <p className="text-sm text-gray-500 mt-2">
              We'll use the phone number you provided{" "}
              <p className="font-semibold">{submittedPhoneNumber}</p>
              to add you to the group. Please ensure it's active on WhatsApp.
            </p>
            {/* copy your userId */}
            <div className="mt-4">
              <p className="text-sm text-gray-500">
                Remember to save your User ID for future reference when
                contacting support:
              </p>
              <p className="mt-2 px-4 py-2 bg-gray-100 rounded-lg text-gray-800 font-mono select-all">
                {`${name
                  .trim()
                  .split(/\s+/)
                  .map((part) => part.toLowerCase().replace(/[^a-z0-9]/g, ""))
                  .join("_")}_${generateUID()}`}
              </p>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button">Got it!</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
