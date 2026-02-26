import { getCurrentLocale } from "@/lib/getCurrentLocale";
import HeroSection from "../_components/HeroSection";
import ResultsCard from "@/components/cards/ResultsCard";
import Image1 from "../../../../../public/works/2874e0b85d5be5e22e62b645e383b513259a7927.jpg" 
import Image2 from "../../../../../public/works/53e578146b783a6f9a956f4fb43cc320cc6c0dfc.jpg" 
import Image3 from "../../../../../public/works/db1f69c8fa1d0f91c223456094ac17732b34341d.jpg" 
import Image from "next/image";

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

      <ResultsCard
        items={[
          {
            value: "120K+",
            title: "وصول بصري للحملة",
            description:
              "قمنا بتطوير مواد بصرية متكاملة لحملة إطلاق العلامة، ما أدى إلى تحقيق انتشار واسع وتعزيز الوعي خلال فترة قصيرة.",
            image: Image1,
          },
          {
            value: "2.8X",
            title: "تحسن في قوة الانطباع الأول",
            description:
              "أعدنا صياغة الهوية بأسلوب عصري مدروس يعكس شخصية العلامة، ما ساعد على مضاعفة تأثيرها البصري وزيادة قوة تواصلها مع الجمهور.",
            image: Image2,
          },
          {
            value: "35%",
            title: "زيادة في التفاعل بعد إطلاق الهوية",
            description:
              "قمنا بتطوير نظام بصري متكامل يعكس شخصية العلامة ويعزز حضورها في السوق، بدءًا من تصميم الشعار وصولًا إلى إعداد دليل الاستخدام.",
            image: Image3,
          },
        ]}
        direction="rtl"
      />
    </div>
  );
}
