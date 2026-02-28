import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { FavouritesSection } from "./components/FavouritesSection";
import { MenuSection } from "./components/MenuSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        backgroundColor: "#0f0a06",
        fontFamily: "'DM Sans', sans-serif",
        color: "#f5f0e8",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <FavouritesSection />
      <MenuSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
