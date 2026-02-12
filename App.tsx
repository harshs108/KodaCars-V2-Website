import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientsSection from './components/ClientsSection';
import SolutionsGrid from './components/SolutionsGrid';
import BenefitsSection from './components/BenefitsSection';
import AiPlatformSection from './components/AiPlatformSection';
import HowItWorks from './components/HowItWorks';
import NewsSection from './components/NewsSection';
import TeamSection from './components/TeamSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import CustomerLoyaltyPage from './components/CustomerLoyaltyPage';
import ReputationManagementPage from './components/ReputationManagementPage';
import LargeVehiclePage from './components/LargeVehiclePage';
import SelfCheckInPage from './components/SelfCheckInPage';
import ShuttleServicesPage from './components/ShuttleServicesPage';
import ContactPage from './components/ContactPage';
import NearAirportPage from './components/NearAirportPage';
import HotelParkingPage from './components/HotelParkingPage';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    // Solution Pages
    if (currentPath === '#near-airport') {
      return <NearAirportPage />;
    }
    
    if (currentPath === '#hotel-parking') {
      return <HotelParkingPage />;
    }

    // Dedicated Insight Pages
    if (currentPath === '#loyalty-insight') {
      return <CustomerLoyaltyPage />;
    }
    
    if (currentPath === '#reputation') {
      return <ReputationManagementPage />;
    }

    if (currentPath === '#large-vehicle') {
      return <LargeVehiclePage />;
    }

    if (currentPath === '#self-check-in') {
      return <SelfCheckInPage />;
    }

    if (currentPath === '#shuttle') {
      return <ShuttleServicesPage />;
    }

    // Contact Page
    if (currentPath === '#contact') {
      return <ContactPage />;
    }

    // Dedicated Team Page
    if (currentPath === '#team') {
      return (
        <div className="pt-16 pb-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-16 py-8">
            <a href="#" className="text-sm font-bold text-gray-500 hover:text-koda-blue flex items-center gap-2 mb-8">
              <span>Home</span> / <span>Team</span>
            </a>
          </div>
          <TeamSection />
        </div>
      );
    }

    // Dedicated General Insights Page
    if (currentPath === '#insights') {
      return (
        <div className="pt-16 pb-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-16 py-8">
            <a href="#" className="text-sm font-bold text-gray-500 hover:text-koda-blue flex items-center gap-2 mb-8">
              <span>Home</span> / <span>Insights</span>
            </a>
          </div>
          <NewsSection />
        </div>
      );
    }

    // Homepage - Now lean and enterprise-focused
    return (
      <>
        <Hero />
        <ClientsSection />
        <SolutionsGrid />
        <BenefitsSection />
        <AiPlatformSection />
        <HowItWorks />
        <CtaSection />
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col w-full font-sans antialiased">
      <Navbar />
      <main className="flex-grow bg-white">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;