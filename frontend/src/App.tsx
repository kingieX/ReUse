import { useState } from "react";
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

type Page = "landing" | "login" | "home" | "dropoff" | "rewards" | "history" | "impact" | "admin" | "about" | "partners" | "faqs" | "contact" | "terms" | "privacy" | "leaderboard";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("landing");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tokenBalance] = useState(250); // Mock token balance

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage("home");
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "landing":
        return <LandingPage onNavigate={handleNavigate} />;
      case "login":
        return <LoginPage onLogin={handleLogin} />;
      case "home":
        return <Dashboard onNavigate={handleNavigate} tokenBalance={tokenBalance} />;
      case "dropoff":
        return <DropoffPage onNavigate={handleNavigate} />;
      case "rewards":
        return <RewardsPage tokenBalance={tokenBalance} onNavigate={handleNavigate} />;
      case "history":
        return <TransactionHistory />;
      case "impact":
        return <ImpactPage />;
      case "admin":
        return <AdminDashboard />;
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

  const showNavAndFooter = currentPage !== "login";

  return (
    <div className="flex flex-col min-h-screen">
      {showNavAndFooter && (
        <Navbar 
          currentPage={currentPage} 
          onNavigate={handleNavigate} 
          isAuthenticated={isAuthenticated}
        />
      )}
      
      <main className="flex-1">
        {renderPage()}
      </main>

      {showNavAndFooter && <Footer onNavigate={handleNavigate} />}
      
      <Toaster position="top-right" />
    </div>
  );
}