import AboutSection from "@/components/landing/AboutSection";
import AIResultsSection from "@/components/landing/AIResultsSection";
import BlogSection from "@/components/landing/BlogSection";
import CallToActionSection from "@/components/landing/CallToActionSection";
import HeroSection from "@/components/landing/HeroSection";
import ImpactSection from "@/components/landing/ImpactSection";
import PartnersSection from "@/components/landing/PartnersSection";
import ServicesSection from "@/components/landing/ServicesSection";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";

export default async function Home() {
  const locale = await getCurrentLocale();
  const translations = await getTrans(locale);

  return (
    <main className="grid-bg "> 
      <HeroSection locale={locale} translations={translations} />
      <AboutSection />
      <ServicesSection />
      <AIResultsSection />
      <BlogSection />
      <PartnersSection />
      <ImpactSection locale={locale} />
      <CallToActionSection />
    </main>
  );
}
