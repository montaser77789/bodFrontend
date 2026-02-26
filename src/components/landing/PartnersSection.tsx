"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// 🔹 عدل المسارات حسب export فيجما
import logo1 from "../../../public/partners/1cf6e3a1f4730b7d74e003448dcb524f8e0ea778.png";
import logo2 from "../../../public/partners/5fa25478fb9ed14de6a5b0781ffcdc068332fd43.png";
import logo3 from "../../../public/partners/6a096d82b33c7e8aab74e530cfc8dd50a0c2a016.png";
import logo4 from "../../../public/partners/b477817836bf361444be4647e4d8027137dffde3.png";
import logo5 from "../../../public/partners/e400914ac51ed5ca17eb32deecb3c1904499560c.png";
import logo6 from "../../../public/partners/ea8d6c6fdf41993b0c8ee83c9414a89c88b0cef3.png";
import logo7 from "../../../public/partners/b477817836bf361444be4647e4d8027137dffde3.png";
import logo8 from "../../../public/partners/ea8d6c6fdf41993b0c8ee83c9414a89c88b0cef3.png";
import Title from "../ui/Title";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

// 🔹 تقسيم اللوجوهات كل 4
const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

export default function PartnersSection() {
  const logoGroups = chunkArray(logos, 4);

  return (
    <section className="relative py-10 bg-[#182440] overflow-hidden">
      <div className="containe">
        {/* Title */}
        <Title
          title="   شركاؤنا في النجاح"
          subtitle=" فخر بثقة علامات رائدة وضعت ثقتها بنا"
        />
        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={32}
          loop
          speed={10000} // كل ما الرقم أكبر الحركة أهدى
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          dir="rtl"
          className="mt-10"
        >
          {logoGroups.map((group, i) => (
            <SwiperSlide key={i}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {group.map((logo, index) => (
                  <div
                    key={index}
                    className="
              bg-white
              rounded-2xl
              border
              border-white/10
              flex
              items-center
              justify-center
              h-[120px]
              md:h-[140px]
            "
                  >
                    <Image
                      src={logo}
                      alt="Partner Logo"
                      className="max-h-15 md:max-h-17.5 w-auto"
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
