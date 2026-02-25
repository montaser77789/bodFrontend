import Image from "next/image";
import logo from "../../../public/Logo.png";
import aiImage from "../../../public/ai/ai-section.png"; // الصورة المصدّرة من فيجما
import logotitle from "../../../public/LogoTitle.png";

export default function AIResultsSection() {
  return (
    <section className="relative py-10 bg-[#1B2C53]">
      <div className="containe grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
        {" "}
        {/* Right Content */}
        <div className="text-right text-white space-y-8 flex-1">
          {/* Title */}
          <div className="flex items-center gap-3">
            <div
              aria-label=""
              className={`
                          w-[40px] h-[40px]
                          md:w-[50px] md:h-[50px]
                          rounded-full
                          bg-[#58FFE3]
                          flex items-center justify-center 
                      `}
            >
              <Image
                src={logotitle}
                alt="Logo"
                width={25}
                height={25}
                className="object-contain"
                priority
              />
            </div>
            <h2 className="text-xl md:text-3xl font-bold leading-tight">
              نتائج حقيقية يقودها{" "}
              <span className="text-primary">الذكاء الاصطناعي</span>
            </h2>
          </div>
          {/* Description */}
          <p className="text-base md:text-lg leading-relaxed text-white/90 max-w-xl ml-auto">
            نمزج بين قوة الذكاء الاصطناعي وخبرة التسويق لبناء استراتيجيات ذكية
            تستجيب للسوق بسرعة وتسبق المنافسين بخطوات.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2  gap-6 max-w-xl ml-auto">
            <StatCard value="75+" label="حملة مدعومة بالذكاء الاصطناعي" />
            <StatCard value="34+" label="شراكة استراتيجية طويلة المدى" />
            <StatCard value="168+" label="عميل وثق في خدماتنا" />
            <StatCard value="%100" label="قرارات مبنية على بيانات" />
          </div>
        </div>
        {/* Left Image */}
        <div className=" flex justify-center lg:justify-start">
          <div className="relative">
            {/* Logo top */}
            <div className="absolute top-0 right-0 z-20 w-26 md:w-30">
              <Image src={logo} alt="Logo" />
            </div>
            <div className="absolute bottom-0 left-0 z-20 w-26 md:w-30">
              <Image src={logo} alt="Logo" />
            </div>
            <Image
              src={aiImage}
              alt="AI Results"
              className="rounded-3xl   object-contain "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- */

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="border border-white/30 rounded-2xl p-6 text-center bg-white/5 backdrop-blur-sm">
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
        {value}
      </div>
      <div className="text-primary text-sm md:text-base">{label}</div>
    </div>
  );
}
