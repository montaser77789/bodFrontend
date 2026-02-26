"use client";

import Image, { StaticImageData } from "next/image";
import Title from "../ui/Title";
import { Locale } from "@/i18n.config";
import image4 from "../../../public/pepole/026b3e78c31a76fc3722139c09208c6cc7d88bef.jpg";
import image2 from "../../../public/pepole/12f408c90b218981f78b2ffdea2ebf2c44da7bb1.jpg";
import image3 from "../../../public/pepole/7a26920f40774068fe0ed54e31d19f4a1e54d55a.jpg";
import image1 from "../../../public/pepole/c9f31f36b495abd9d73efc1d684a67a45aa5374e.jpg";

interface ImpactItem {
  name: string;
  followers: string;
  tag: string;
  image: StaticImageData;
  grayscale?: boolean;
}

interface ImpactSectionProps {
  locale: Locale;
}
const impactItems: ImpactItem[] = [
  {
    name: "عبدالعزيز الشهراني",
    followers: "980K",
    tag: "تحليل البيانات",
    image: image1,
  },
  {
    name: "سارة المطيري",
    followers: "3.4M",
    tag: "التجارة الإلكترونية",
    image: image2,
  },
  {
    name: "فهد العتيبي",
    followers: "1.9M",
    tag: "التحول الرقمي",
    image: image3,
    grayscale: true,
  },
  {
    name: "لينا الحربي",
    followers: "2.4M",
    tag: "سوشيال ميديا",
    image: image4,
  },
];
export default function ImpactSection({ locale }: ImpactSectionProps) {
  const direction = locale === "ar" ? "rtl" : "ltr";
  return (
    <section dir={direction} className="relative py-10    overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0b1430]" />

      {/* Grid Overlay */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),
              linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      <div className="relative containe">
        {/* Header */}
        <Title
          title="حضور يتجاوز الأرقام"
          subtitle="نختار الأصوات المناسبة لعلامتك بعناية لنصنع تأثيرًا حقيقيًا يتجاوز مجرد الأرقام."
        />

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-10">
          {impactItems.map((item, index) => (
            <div
              key={index}
              className="
                relative
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur
                p-8
                text-center
              "
            >
              {/* Avatar */}
              <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-6 border border-white/20">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                  className={`w-full h-full object-cover ${
                    item.grayscale ? "grayscale" : ""
                  }`}
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold text-white">{item.name}</h3>

              {/* Followers */}
              <div className="mt-2 text-3xl font-bold text-[#2FFFE0]">
                {item.followers}
              </div>
              <div className="text-sm text-white/60">متابع</div>

              {/* Tag */}
              <div className="mt-5 inline-flex items-center justify-center px-4 py-2 rounded-full border border-white/20 text-sm text-white/80">
                {item.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
