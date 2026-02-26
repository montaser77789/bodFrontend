import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Title from "../ui/Title";

import img1 from "../../../public/blog/7bc8ccdab3c7feaf992912e8eb1e4b8b75907b16.jpg";
import img2 from "../../../public/blog/95c92cf513945f7d1f3c94ef6093d99dcee7341f.jpg";
import img3 from "../../../public/blog/bd28b84abc9524aed8fce5fc43187bf1f57c610f.jpg";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BlogCard from "../cards/BlogCard";

const posts = [
  {
    title: "حملة إعلانية حققت 4X عائد استثماري اعتمدت على تحليل البيانات",
    description:
      "تم تحسين الرسائل الإعلانية واختبار أكثر من نسخة (A/B Testing)...",
    image: img1,
    category: "دراسات حالة",
    readTime: "15 دقائق",
  },
  {
    title: "الفرق بين التسويق التقليدي والتسويق الذي يفكر قبلك",
    description:
      "التسويق التقليدي يعتمد على الخبرة والحدس، أما التسويق الحديث...",
    image: img2,
    category: "استراتيجيات النمو",
    readTime: "10 دقائق",
  },
  {
    title: "مستقبل الذكاء الاصطناعي في التصميم الرقمي",
    description: "استكشاف كيف يعيد الذكاء الاصطناعي تشكيل عالم التصميم...",
    image: img3,
    category: "الذكاء الاصطناعي",
    readTime: "8 دقائق",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-[#182440]!  py-10 ">
      <div className="containe">
        <div className="flex flex-col text-center m-auto gap-1 justify-center text-white">
          <h1 className="text-xl md:text-2xl font-bold ">
            بُعد... حيث تُصنع القرارات
          </h1>
          <h2 className="text-md md:text-lg font-semibold ">
            مقالات وتحليلات عملية تساعدك على فهم السوق وصناعة نمو مستدام
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}
        </div>

        {/* More Button */}
        <div className="flex justify-center items-center mt-12">
          <Button className="px-14 py-6 bg-primary text-black  hover:bg-primary/90">
           عرض المزيد <ArrowLeft size={20} className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
