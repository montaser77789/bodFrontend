"use client";

import Image, { StaticImageData } from "next/image";

interface ResultItem {
  value: string;
  title: string;
  description: string;
  image: StaticImageData;
}

interface ResultsSectionProps {
  items: ResultItem[];
  direction?: "rtl" | "ltr";
}

export default function ResultsCard({
  items,
  direction = "rtl",
}: ResultsSectionProps) {
  return (
    <section dir={direction} className="relative py-20 overflow-hidden">
      <div className="containe">
        <div className="flex items-center gap-6 mb-6">
          {/* Title */}
          <h3 className="text-white font-bold text-[32px] whitespace-nowrap">
            ابرز اعمالنا
          </h3>

          {/* Gradient Line */}
          <div
            className="
        h-[2px]
        flex-1
        bg-[linear-gradient(90deg,#182440_8.17%,#58FFE3_100%)]
      "
          />
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="
                relative
                rounded-2xl
                border
                border-white/20
                bg-[#0b1430]/80
                p-6
                flex
                flex-col
                justify-between
                min-h-[520px]
              "
            >
              {/* Value */}
              <div>
                <h3 className="text-[56px] font-bold text-[#00D3ED]">
                  {item.value}
                </h3>

                <h4 className="mt-2 text-lg font-bold text-[#2FFFE0]">
                  {item.title}
                </h4>

                <p className="mt-4 text-sm text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Image */}
              <div className="mt-6 overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={260}
                  className="w-full h-[200px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
