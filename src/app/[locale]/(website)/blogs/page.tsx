import { getCurrentLocale } from "@/lib/getCurrentLocale";
import HeroSection from "../_components/HeroSection";
import TopicsTabs from "../_components/TopicsTabs";
import Tabs from "./_components/Tabs";
import img1 from "../../../../../public/blog/7bc8ccdab3c7feaf992912e8eb1e4b8b75907b16.jpg";
import img2 from "../../../../../public/blog/95c92cf513945f7d1f3c94ef6093d99dcee7341f.jpg";
import img3 from "../../../../../public/blog/bd28b84abc9524aed8fce5fc43187bf1f57c610f.jpg";
import BlogCard from "@/components/cards/BlogCard";
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

export default async function page() {
  const locale = await getCurrentLocale();
  return (
    <div>
      <HeroSection
        title="عصر جديد من التسويق الذكي"
        locale={locale}
        BadgePropse="هيمنة رقمية"
        description="مقالات متخصصة في التسويق الرقمي، وتحليلات تساعدك على اتخاذ قرارات أذكى."
        stats={[
          { number: 6, label: "مجالات تسويق" },
          { number: 8, label: "دراسة حالة" },
          { number: 35, label: "مقالة متخصصة" },
        ]}
      />
      <div className="containe">
        <Tabs />
        {/* Cards Grid */}
        <div className="flex items-center gap-6 mb-6">
          {/* Title */}
          <h3 className="text-white font-bold text-[32px] whitespace-nowrap">
            احدث المقالات
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
