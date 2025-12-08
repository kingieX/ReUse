import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { LandingPage } from "./components/pages/LandingPage";
import { LoginPage } from "./components/pages/LoginPage";
import { Dashboard } from "./components/pages/Dashboard";
import { DropoffPage } from "./components/pages/DropoffPage";
import { RewardsPage } from "./components/pages/RewardsPage";
import { TransactionHistory } from "./components/pages/TransactionHistory";
import { ImpactPage } from "./components/pages/ImpactPage";
import { AdminDashboard } from "./components/pages/AdminDashboard";
import { AboutPage } from "./components/pages/AboutPage";
import { PartnersPage } from "./components/pages/PartnersPage";
import { FAQsPage } from "./components/pages/FAQsPage";
import { ContactPage } from "./components/pages/ContactPage";
import { TermsPage } from "./components/pages/TermsPage";
import { PrivacyPage } from "./components/pages/PrivacyPage";
import { LeaderboardPage } from "./components/pages/LeaderboardPage";
import { Toaster } from "./components/ui/sonner";
import { SignUpPage } from "./components/pages/SignUpPage";
import { ProtectedRoute } from "./components/ProtectedRoute";

type Page =
  | "landing"
  | "login"
  | "signup"
  | "home"
  | "dropoff"
  | "rewards"
  | "history"
  | "impact"
  | "admin"
  | "about"
  | "partners"
  | "faqs"
  | "contact"
  | "terms"
  | "privacy"
  | "leaderboard";

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>("landing");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tokenBalance] = useState(250);
  const navigate = useNavigate();
  const location = useLocation();

  // Sync URL with currentPage
  useEffect(() => {
    const path = location.pathname.slice(1) || "landing";
    setCurrentPage(path as Page);
  }, [location.pathname]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage("home");
    navigate("/home");
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
    setCurrentPage("home");
    navigate("/home");
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    navigate(`/${page}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "landing":
        return <LandingPage onNavigate={handleNavigate} />;
      case "login":
        return <LoginPage onLogin={handleLogin} />;
      case "signup":
        return <SignUpPage />;
      case "home":
        return (
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Dashboard
              onNavigate={handleNavigate}
              tokenBalance={tokenBalance}
            />
          </ProtectedRoute>
        );
      case "dropoff":
        return (
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <DropoffPage onNavigate={handleNavigate} />;
          </ProtectedRoute>
        );
      case "rewards":
        return (
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <RewardsPage
              tokenBalance={tokenBalance}
              onNavigate={handleNavigate}
            />
          </ProtectedRoute>
        );
      case "history":
        return (
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <TransactionHistory />;
          </ProtectedRoute>
        );
      case "admin":
        return (
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <AdminDashboard />;
          </ProtectedRoute>
        );

      // Public Pages
      case "impact":
        return <ImpactPage />;
      case "about":
        return <AboutPage />;
      case "partners":
        return <PartnersPage />;
      case "faqs":
        return <FAQsPage />;
      case "contact":
        return <ContactPage />;
      case "terms":
        return <TermsPage />;
      case "privacy":
        return <PrivacyPage />;
      case "leaderboard":
        return <LeaderboardPage />;
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  // const showNavAndFooter = currentPage !== "login";
  const showNavAndFooter = currentPage !== "login" && currentPage !== "signup";

  return (
    <div className="flex flex-col min-h-screen">
      {showNavAndFooter && (
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          isAuthenticated={isAuthenticated}
        />
      )}
      <main className="flex-1">{renderPage()}</main>
      {showNavAndFooter && <Footer onNavigate={handleNavigate} />}
      <Toaster position="top-right" />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
