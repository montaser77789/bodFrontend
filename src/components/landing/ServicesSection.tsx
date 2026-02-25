"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useRef } from "react";
import Image from "next/image";
import Title from "../ui/Title";
import ServiceCard from "./components/ServiceCard";
import { ChevronRight, ChevronLeft } from "lucide-react";

import image1 from "../../../public/services/52eca271493c5fd7d10851ec2d615520cc216209.jpg";
import image2 from "../../../public/services/5ded58d95dcf7dea09adafb68e785485d5db8bc5.jpg";
import image3 from "../../../public/services/f342ad70f5bd90b79cf2bd1f54220da3989b9f2a.jpg";

const services = [
  {
    title: "التصميم الجرافيكي",
    description:
      "نبني هوية بصرية متكاملة تعكس شخصية علامتك وتترك أثرًا واضحًا في أذهان جمهورك، من الشعارات إلى المواد التسويقية الاحترافية",
    image: image1,
    align: "right",
  },
  {
    title: "إنشاء المواقع الإلكترونية",
    description:
      "نصمم مواقع سريعة وعصرية تركز على تجربة المستخدم،  والتصميم الجذاب، لتحويل الزائر إلى فرصة حقيقية للنمو وزيادة معدلات التحويل بشكل مستدام.",
    image: image2,
    align: "right",
  },
  {
    title: "الإعلانات المدفوعة",
    description:
      "نصمم ونُدير حملات إعلانية قائمة على التحليل الدقيق لتحقيق أعلى عائد ممكن وزيادة ملموسة في المبيعات.",
    image: image3,
    align: "left",
  },
];

export default function ServicesSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="containe py-10 bg-[#182440]  ">
      {/* Title + Arrows */}
      <div className="flex items-center justify-between mb-8">
        <Title
          title="من الفكرة إلى الأثر"
          subtitle="حلول تسويقية متكاملة مصممة لتحقيق نمو مستدام."
        />

        {/* Desktop Arrows */}
        <div className="hidden md:flex gap-3">
          <button
            ref={prevRef}
            className="w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition"
          >
            <ChevronRight />
          </button>

          <button
            ref={nextRef}
            className="w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition"
          >
            <ChevronLeft />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        autoplay={{ delay: 6000 }}
        loop
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{
          el: ".services-pagination",
          clickable: true,
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="relative h-[420px] md:h-[480px] rounded-3xl overflow-hidden"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority={index === 0}
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 h-full flex items-center px-6 md:px-12">
              <div className="w-full flex justify-center md:justify-start text-center">
                <ServiceCard
                  {...service}
                  key={index}
                  align={service.align === "right" ? "right" : "left"}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Mobile Dots */}
      <div className="services-pagination mt-6 flex justify-center md:hidden"></div>
    </section>
  );
}
