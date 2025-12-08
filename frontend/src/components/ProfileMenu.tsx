import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { User, LogOut, History, Settings } from "lucide-react";

export function ProfileMenu({
  onNavigate,
}: {
  onNavigate: (page: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Close on outside click
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div ref={ref} className="relative">
      <Button
        variant="ghost"
        className="relative h-10 w-10 rounded-full"
        onClick={() => setOpen((s) => !s)}
      >
        <Avatar>
          <AvatarFallback className="bg-[#22C55E] text-white">
            <User className="h-5 w-5" />
          </AvatarFallback>
        </Avatar>
      </Button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white border shadow-lg rounded-md z-[9999] py-2 animate-in fade-in slide-in-from-top-2">
          <div className="px-4 py-2">
            <p className="font-semibold">User Profile</p>
            <p className="text-sm text-muted-foreground">+234 XXX XXX XXXX</p>
          </div>

          <div className="border-t my-1" />

          <button
            onClick={() => {
              setOpen(false);
              onNavigate("home");
            }}
            className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-50"
          >
            <User className="h-4 w-4" /> Dashboard
          </button>

          <button
            onClick={() => {
              setOpen(false);
              onNavigate("history");
            }}
            className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-50"
          >
            <History className="h-4 w-4" /> Transaction History
          </button>

          <button className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-50">
            <Settings className="h-4 w-4" /> Settings
          </button>

          <div className="border-t my-1" />

          <button
            onClick={() => {
              setOpen(false);
              onNavigate("landing");
            }}
            className="flex items-center gap-2 px-4 py-2 w-full text-left text-red-600 hover:bg-gray-50"
          >
            <LogOut className="h-4 w-4" /> Logout
          </button>
        </div>
      )}
    </div>
  );
}
