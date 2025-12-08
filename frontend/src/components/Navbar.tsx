import { Logo } from "./Logo";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Menu, User, LogOut, History, Settings } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isAuthenticated?: boolean;
}

export function Navbar({
  currentPage,
  onNavigate,
  isAuthenticated,
}: NavbarProps) {
  const navLinks = [
    { name: "Home", value: "home" },
    { name: "Drop-off Points", value: "dropoff" },
    { name: "Rewards", value: "rewards" },
    { name: "Leaderboard", value: "leaderboard" },
    { name: "Impact", value: "impact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <button
              onClick={() => onNavigate("landing")}
              className="cursor-pointer"
            >
              <Logo />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.value}
                  onClick={() => onNavigate(link.value)}
                  className={`transition-colors hover:text-[#22C55E] ${
                    currentPage === link.value
                      ? "text-[#22C55E]"
                      : "text-[#64748B]"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-10 w-10 rounded-full"
                  >
                    <Avatar>
                      <AvatarFallback className="bg-[#22C55E] text-white">
                        <User className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1">
                      <p>User Profile</p>
                      <p className="text-muted-foreground">+234 XXX XXX XXXX</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => onNavigate("home")}>
                    <User className="mr-2 h-4 w-4" />
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onNavigate("history")}>
                    <History className="mr-2 h-4 w-4" />
                    Transaction History
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => onNavigate("landing")}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex gap-4">
                <Button onClick={() => onNavigate("login")}>Sign In</Button>
                <Button onClick={() => onNavigate("signup")} className="ml-2">
                  Sign up
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <button className="inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-secondary transition-colors">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <button
                    key={link.value}
                    onClick={() => onNavigate(link.value)}
                    className={`text-left transition-colors hover:text-[#22C55E] ${
                      currentPage === link.value
                        ? "text-[#22C55E]"
                        : "text-[#64748B]"
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
                {!isAuthenticated && (
                  <div>
                    <Button
                      onClick={() => onNavigate("login")}
                      className="w-full"
                    >
                      Sign In
                    </Button>
                    <Button
                      onClick={() => onNavigate("signup")}
                      className="w-full"
                    >
                      Sign up
                    </Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
