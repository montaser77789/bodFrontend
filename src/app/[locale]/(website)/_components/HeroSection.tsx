"use client";
import { Locale } from "@/i18n.config";
import backgroundImage from "../../../../../public/fc40e16183ae2a7c7fa8665634e5a7a4b7ed45a5.jpg";
import { Badge } from "@/components/ui/badge";
interface StatItem {
  number: number | string;
  label: string;
}

interface HeroSectionProps {
  title: string;
  description: string;
  stats: StatItem[];
  locale: Locale;
  BadgePropse: string;
}

export default function HeroSection({
  title,
  description,
  stats,
  locale,
  BadgePropse,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden h-[calc(100vh-150px)] py-10 text-center">
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0b1430]/90" />

      {/* Grid Overlay */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
          bg-[size:40px_40px]
          opacity-40
        "
      />

      {/* Soft Waves Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,255,200,0.15),transparent_60%)]" />

      {/* Content */}
      <div className="relative container mx-auto px-8">
        <Badge
          className="
            text-md
            px-5
            md:px-8
            bg-[#293A6180]
            text-primary
            backdrop-blur-sm
            border border-white/10
            mb-6
          "
        >
          {BadgePropse}
        </Badge>{" "}
        <h1
          className="
          font-bold
          text-[28px]
          md:text-[40px]
          lg:text-[48px]
          leading-[1.1]
          md:leading-[1.1]
          lg:leading-[105px]
          bg-[linear-gradient(180deg,#58FFE3_0%,#FFFFFF_100%)]
          bg-clip-text
          text-transparent
        "
        >
          {title}
        </h1>
        <p
          className="
          mt-6
          font-din
          font-normal
          text-center
          text-[20px]
          md:text-[26px]
          lg:text-[32px]
          leading-[1.6]
          tracking-normal
          text-[#AFAFAF]
          max-w-2xl
          mx-auto
        "
        >
          {description}
        </p>
        {/* Stats */}
        <div
          className={`
            mt-16
            flex
            
            items-center
            justify-center
            gap-10
            md:gap-20
          `}
        >
          {stats.map((stat, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-white">
                {stat.number}
              </span>

              <span className="mt-2 text-sm text-white/70">{stat.label}</span>

              {/* Divider */}
              {index !== stats.length - 1 && (
                <div
                  className={`
                    hidden md:block
                    absolute
                    top-1/2 -translate-y-1/2
                    w-px h-12 bg-white/20
                    ${locale === "ar" ? "-left-10" : "-right-10"}
                  `}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
