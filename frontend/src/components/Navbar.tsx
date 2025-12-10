import { Logo } from "./Logo";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Menu, User, LogOut, History, Settings } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ProfileMenu } from "./ProfileMenu";

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
  // Public links (always visible)
  const publicLinks = [
    // { name: "Home", value: isAuthenticated ? "home" : "landing" },
    // { name: "Leaderboard", value: "leaderboard" },
    // { name: "Impact", value: "impact" },
    { name: "", value: "" },
  ];

  // Auth-only links
  const protectedLinks = [
    { name: "Drop-off Points", value: "dropoff" },
    { name: "Rewards", value: "rewards" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Logo always navigates to landing */}
            <button
              onClick={() => onNavigate("landing")}
              className="cursor-pointer"
            >
              <Logo />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Public Links */}
            {publicLinks.map((link) => (
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

            {/* Only show if user is authenticated */}
            {isAuthenticated &&
              protectedLinks.map((link) => (
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

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              // <DropdownMenu>
              //   <DropdownMenuTrigger asChild>
              //     <Button
              //       variant="ghost"
              //       className="relative h-10 w-10 rounded-full"
              //     >
              //       <Avatar>
              //         <AvatarFallback className="bg-[#22C55E] text-white">
              //           <User className="h-5 w-5" />
              //         </AvatarFallback>
              //       </Avatar>
              //     </Button>
              //   </DropdownMenuTrigger>

              //   <DropdownMenuPortal>
              //     <DropdownMenuContent
              //       align="end"
              //       className="w-56 z-[999999] bg-white shadow-xl border rounded-md"
              //       sideOffset={8}
              //     >
              //       <div className="flex items-center justify-start gap-2 p-2">
              //         <div className="flex flex-col space-y-1">
              //           <p>User Profile</p>
              //           <p className="text-muted-foreground">
              //             +234 XXX XXX XXXX
              //           </p>
              //         </div>
              //       </div>

              //       <DropdownMenuSeparator />

              //       <DropdownMenuItem onClick={() => onNavigate("home")}>
              //         <User className="mr-2 h-4 w-4" />
              //         Dashboard
              //       </DropdownMenuItem>

              //       <DropdownMenuItem onClick={() => onNavigate("history")}>
              //         <History className="mr-2 h-4 w-4" />
              //         Transaction History
              //       </DropdownMenuItem>

              //       <DropdownMenuItem>
              //         <Settings className="mr-2 h-4 w-4" />
              //         Settings
              //       </DropdownMenuItem>

              //       <DropdownMenuSeparator />

              //       {/* Logout resets to landing */}
              //       <DropdownMenuItem onClick={() => onNavigate("landing")}>
              //         <LogOut className="mr-2 h-4 w-4" />
              //         Logout
              //       </DropdownMenuItem>
              //     </DropdownMenuContent>
              //   </DropdownMenuPortal>
              // </DropdownMenu>
              // <ProfileMenu onNavigate={onNavigate} />
              <div></div>
            ) : (
              <div className="flex gap-4">
                {/* <Button onClick={() => onNavigate("login")}>Sign In</Button> */}
                {/* <Button onClick={() => onNavigate("signup")} className="ml-2">
                  Sign up
                </Button> */}
                <Button onClick={() => onNavigate("signup")} className="ml-2">
                  Join community
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
              <div className="flex flex-col gap-6 mt-8 px-4">
                {/* Public Links */}
                {publicLinks.map((link) => (
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

                {/* Protected Links */}
                {isAuthenticated &&
                  protectedLinks.map((link) => (
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

                {/* Mobile Auth Buttons */}
                {!isAuthenticated && (
                  <div>
                    {/* <Button
                      onClick={() => onNavigate("login")}
                      className="w-full"
                    >
                      Sign In
                    </Button> */}
                    <Button
                      onClick={() => onNavigate("signup")}
                      className="w-full mt-2"
                    >
                      Sign up
                    </Button>
                  </div>
                )}

                {/* Logout in mobile menu */}
                {isAuthenticated && (
                  <Button
                    onClick={() => onNavigate("landing")}
                    className="w-full mt-6"
                    variant="outline"
                  >
                    Logout
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
