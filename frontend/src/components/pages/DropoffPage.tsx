import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { DropoffPointCard, DropoffPoint } from "../DropoffPointCard";
import { Search, MapPin, Upload, CheckCircle } from "lucide-react";
import { toast } from "sonner";

interface DropoffPageProps {
  onNavigate: (page: string) => void;
}

export function DropoffPage({ onNavigate }: DropoffPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPoint, setSelectedPoint] = useState<string | null>(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [notes, setNotes] = useState("");

  const dropoffPoints = [
    {
      id: "1",
      name: "Asaba Recycling Hub",
      address: "15 Nnebisi Road, Asaba, Delta State",
      distance: "1.2 km",
      status: "open",
      hours: "8:00 AM - 6:00 PM",
      contact: "+234 803 XXX XXXX",
      materials: ["Plastic", "Glass", "Metal", "Cardboard"],
    },
    {
      id: "2",
      name: "Warri Eco Collection Point",
      address: "32 Effurun-Sapele Road, Warri, Delta State",
      distance: "3.5 km",
      status: "open",
      hours: "7:00 AM - 5:00 PM",
      contact: "+234 805 XXX XXXX",
      materials: ["Plastic", "Metal", "E-waste"],
    },
    {
      id: "3",
      name: "Ughelli Green Center",
      address: "8 Market Road, Ughelli, Delta State",
      distance: "2.8 km",
      status: "open",
      hours: "8:00 AM - 6:00 PM",
      contact: "+234 807 XXX XXXX",
      materials: ["Plastic", "Glass", "Cardboard"],
    },
    {
      id: "4",
      name: "Sapele Recycling Station",
      address: "21 Okpe Road, Sapele, Delta State",
      distance: "4.2 km",
      status: "closed",
      hours: "Closed Today",
      contact: "+234 809 XXX XXXX",
      materials: ["All Materials"],
    },
    {
      id: "5",
      name: "Ozoro Waste Management",
      address: "10 Delta State Polytechnic Rd, Ozoro, Delta State",
      distance: "5.0 km",
      status: "open",
      hours: "9:00 AM - 4:00 PM",
      contact: "+234 811 XXX XXXX",
      materials: ["Plastic", "Glass", "Metal", "E-waste"],
    },
    {
      id: "6",
      name: "Effurun Recycling Depot",
      address: "5 Udu Road, Effurun, Delta State",
      distance: "3.0 km",
      status: "open",
      hours: "8:00 AM - 6:00 PM",
      contact: "+234 813 XXX XXXX",
      materials: ["Plastic", "Glass", "Cardboard"],
    },
  ];

  const filteredPoints = dropoffPoints.filter(
    (point) =>
      point.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      point.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectPoint = (id: string) => {
    setSelectedPoint(id);
    setShowConfirmDialog(true);
  };

  const handleConfirmDropoff = () => {
    setShowConfirmDialog(false);
    // Simulate successful drop-off
    setTimeout(() => {
      setShowSuccessDialog(true);
    }, 500);
  };

  const handleSuccessClose = () => {
    setShowSuccessDialog(false);
    setNotes("");
    setSelectedPoint(null);
    toast.success("50 tokens have been credited to your account!");
    // onNavigate("home");
    onNavigate("landing");
  };

  const selectedPointData = dropoffPoints.find((p) => p.id === selectedPoint);

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="mb-2">Find Drop-off Points</h1>
          <p className="text-[#64748B]">
            Locate nearby recycling centers and drop your recyclables
          </p>
        </div>

        {/* Map Placeholder */}
        <Card className="mb-8 overflow-hidden">
          <div className="h-[300px] md:h-[400px] bg-gradient-to-br from-[#22C55E]/20 to-[#84CC16]/20 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-[#22C55E] mx-auto mb-3" />
                <p className="text-[#64748B]">Interactive Map</p>
                <p className="text-[#64748B]">
                  Showing {filteredPoints.length} drop-off points near you
                </p>
              </div>
            </div>
            {/* Map markers simulation */}
            {filteredPoints.slice(0, 4).map((point, index) => (
              <div
                key={point.id}
                className="absolute w-10 h-10 bg-[#22C55E] rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                style={{
                  left: `${20 + index * 20}%`,
                  top: `${30 + index * 10}%`,
                }}
              >
                <MapPin className="w-5 h-5 text-white" />
              </div>
            ))}
          </div>
        </Card>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B]" />
            <Input
              placeholder="Search by location or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Drop-off Points List */}
        <div className="space-y-4">
          {filteredPoints.map((point) => (
            <DropoffPointCard
              key={point.id}
              point={point}
              onSelect={handleSelectPoint}
            />
          ))}
        </div>

        {filteredPoints.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <MapPin className="w-12 h-12 text-[#64748B] mx-auto mb-4" />
              <p className="text-[#64748B]">
                No drop-off points found. Try a different search.
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Drop-off</DialogTitle>
            <DialogDescription>
              You're about to drop off recyclables at {selectedPointData?.name}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            {/* enter your name */}
            <div>
              <Label htmlFor="names">Full name</Label>
              <Input id="names" placeholder="John Doe" className="mt-2" />
            </div>
            {/* enter user ID */}
            <div>
              <Label htmlFor="userId">User ID</Label>
              <Input id="userId" placeholder="123456" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="notes">Describe your recyclables</Label>
              <Textarea
                id="notes"
                placeholder="e.g., 5 plastic bottles, 2 glass containers..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="mt-2"
              />
            </div>
            {/* <div className="flex items-center gap-2 p-4 rounded-lg bg-[#F3F4F6]">
              <Upload className="w-5 h-5 text-[#64748B]" />
              <div>
                <p>Upload Photo (Optional)</p>
                <p className="text-[#64748B]">Help us verify your drop-off</p>
              </div>
            </div> */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setShowConfirmDialog(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button onClick={handleConfirmDropoff} className="flex-1">
                Confirm Drop-off
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#22C55E]/10 flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-[#22C55E]" />
            </div>
            <DialogHeader>
              <DialogTitle className="text-center">
                Drop-off Sent! 🎉
              </DialogTitle>
              <DialogDescription>
                {/* You've earned 50 tokens for your contribution */}
                You will be notified once your drop-off is verified.
              </DialogDescription>
            </DialogHeader>
            <div className="my-6 p-4 rounded-lg bg-gradient-to-r from-[#FACC15]/20 to-[#FDE047]/20">
              {/* <p className="text-[#14532D]">+50 Tokens</p> */}
            </div>
            <Button onClick={handleSuccessClose} className="w-full">
              Back to Home
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
