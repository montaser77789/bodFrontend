"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";

export default function CallToActionSection() {
  return (
    <section className="relative py-24 bg-[#182440] border-t overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 " />

      {/* Grid Overlay */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
          bg-size-[40px_40px]
          opacity-40
        "
      />

      <div className="relative container mx-auto px-4 text-center">
        {/* Badge */}
        <p className="block w-fit m-auto items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 text-sm text-teal-300">
          نخطط • ننفذ • نحقق
        </p>

        {/* Title */}
        <h2
          className="
            relative
            text-3xl md:text-5xl
            font-bold
            leading-tight
            bg-[linear-gradient(90deg,#FFFFFF_0%,#0F9882_100%)]
            bg-clip-text
            text-transparent
            inline-block
            after:content-['']
            after:absolute
            after:-bottom-4
            after:left-0
            after:w-[380px]
            after:h-[3px]
            after:bg-[linear-gradient(270deg,#FFFFFF_0%,#182440_76.44%)]
        "
        >
          ابدأ خطواتك الأولى نحو نمو أذكى
        </h2>

        {/* Description */}
        <p className="mt-8 text-base md:text-2xl  text-white/70 max-w-3xl mx-auto leading-relaxed">
          شاركنا تفاصيل مشروعك وسنعد لك استراتيجية
          <br className="hidden md:block" />
          مدعومة بالذكاء الاصطناعي.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <Button className="py-6 px-12 text-lg md:text-xl">
            أرسل طلبك الآن
            <span className="text-lg">
              <ArrowLeft size={20} className="w-4 h-4 ml-2" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
