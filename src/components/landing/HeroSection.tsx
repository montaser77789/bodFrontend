"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import image1 from "../../../public/hero/Vector1.png";
import image2 from "../../../public/hero/Vector2.png";
import image3 from "../../../public/hero/Vector3.png";
import image4 from "../../../public/hero/Vector4.png";
import logo from "../../../public/Logo.png";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n.config";
import { Translations } from "@/types";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const HERO_IMAGES = [image1, image2, image3, image4];
interface HeroSectionProps {
  locale: Locale;
  translations: Translations;
}
export default function HeroSection({ locale }: HeroSectionProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);
  return (
    <section className="bg-[#0F172A]! grid-bg py-3 ">
      <div className="containe">
        {/* Hero Box */}
        <div className="relative h-[85vh]  rounded-3xl overflow-hidden">
          {/* Slider */}
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            effect="fade"
            autoplay={
              isMobile ? false : { delay: 5000, disableOnInteraction: false }
            }
            loop
            pagination={{
              el: ".hero-pagination",
              clickable: true,
            }}
            className="absolute inset-0 z-0 h-full"
          >
            {HERO_IMAGES.map((src, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={src}
                  alt="Hero background"
                  fill
                  quality={70}
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Overlay */}
          <div className="absolute inset-0 z-10 bg-black/30" />

          {/* Content فوق الصورة */}
          <div className="absolute inset-0 z-20 flex items-center px-6 md:px-14">
            {/* Logo */}
            <div
              className={`absolute top-6 ${locale === "ar" ? "right-6" : "left-6"} md:top-10 md:right-10 z-30`}
            >
              <Image
                src={logo}
                alt="Logo"
                width={120}
                height={40}
                className="w-24 md:w-32"
              />
            </div>

            {/* Pagination Dots */}
            <div
              className={`hero-pagination absolute top-6 md:top-10 z-30
            ${locale === "ar" ? "left-6 md:left-10" : "right-6 md:right-10"}
            flex gap-2`}
            ></div>
            {/* Scroll / Arrow Button */}
            <div className="bg-background">
              <button
                aria-label="Scroll down"
                className={`
                absolute bottom-3 md:bottom-2 lg:bottom-4 z-30 left-1 md:left-6
                w-[30px] h-[30px]
                md:w-[50px] md:h-[50px]
                rounded-full
                bg-[#58FFE3]
                flex items-center justify-center
                shadow-lg
                transition-transform duration-300
                hover:scale-105
                active:scale-95
                animate-arrow
            `}
                onClick={() => {
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  });
                }}
              >
                <ArrowDown className="w-8 h-8 text-[#0F172A]" />
              </button>
            </div>

            <div className="max-w-3xl">
              <h1
                className={`text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-10 text-center ${
                  locale === "ar" ? "md:text-right" : "md:text-left"
                }`}
              >
                ليست خطوة جديدة، بل{" "}
                <span className="bg-primary text-primary-foreground pb-2 my-2">
                  بداية عصر
                </span>
              </h1>

              <p
                className={`mt-6 text-primary text-lg md:text-2xl leading-relaxed text-center ${
                  locale === "ar" ? "md:text-right" : "md:text-left"
                }`}
              >
                في بُعد، نبني استراتيجيات رقمية تتجاوز التنفيذ لنحوّل الطموح إلى
                حضور مؤثر ونمو مستدام يعكس قوة علامتك في السوق
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  className="px-16 py-6 w-full md:w-fit bg-[linear-gradient(180deg,#EDEDED_0%,#58FFE3_100%)]! font-bold text-md md:text-lg
"
                >
                  احجز استشارة
                </Button>

                <Button
                  variant="outline"
                  className="px-16 py-6 w-full md:w-fit border-white text-white bg-transparent font-bold text-md md:text-lg"
                >
                  تصفح المدونة
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
