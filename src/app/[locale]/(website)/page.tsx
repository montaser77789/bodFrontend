import AboutSection from "@/components/landing/AboutSection";
import HeroSection from "@/components/landing/HeroSection";
import ServicesSection from "@/components/landing/ServicesSection";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";

export default async function Home() {
  const locale = await getCurrentLocale();
  const translations = await getTrans(locale);

  return (
    <main>
      <HeroSection locale={locale} translations={translations} />
      <AboutSection />
      <ServicesSection />
    </main>
  );
}
