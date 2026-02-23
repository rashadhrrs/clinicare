import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SearchSection from "./components/SearchSection";
import CategoriesSection from "./components/CategoriesSection";
import PromoSection from "./components/PromoSection";
import MobileUserHeader from "./components/MobileUserHeader";
import NearbyClinicsSection from "./components/NearbyClinicsSection";
import ArticlesSection from "./components/ArticlesSection";
import BottomNavigation from "./components/BottomNavigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Header */}
      <Header />

      {/* Mobile User Header */}
      <MobileUserHeader />

      <main>
        <HeroSection />

        <SearchSection />

        <CategoriesSection />

        {/* Nearby Clinics (Mobile Only) */}
        <NearbyClinicsSection />

        <PromoSection />

        {/* Articles Section (Mobile Only) */}
        <ArticlesSection />

        <div className="md:hidden h-20"></div>
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}
