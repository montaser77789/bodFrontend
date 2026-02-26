import Title from "../ui/Title";
import Image from "next/image";

import backgroundImage from "../../../public/about/LOGO-Bod-dark-300x2472.png";
import man from "../../../public/about/f47da385a7f4e4064e53d9d75bc70b3a859cc693.png";
import logoWhite from "../../../public/Logo.png";
import logo from "../../../public/LogoTitle.png";

export default function AboutSection() {
  return (
    <section className="containe bg-[#182440] py-10 md:py-12 ">
      {/* Section Title */}
      <Title
        title="رحلتنا نحو التأثير"
        subtitle="شريكك الاستراتيجي للنمو الرقمي"
      />

      {/* Card */}
      <div className="relative rounded-3xl!  mt-10 md:mt-12 ">
        {/* Background Image */}
        <Image
          src={backgroundImage}
          alt="Background Logo"
          height={100}
          width={100}
          className=" absolute inset-0 z-1 w-[90%] h-[30%] mt-10 md:w-[50%] md:h-[80%] m-auto"
        />

        {/* Color Overlay */}
        <div className="absolute inset-0 bg-[#B0F4E9] bg-opacity-50 rounded-3xl" />

        {/* Content */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2  md:gap-16 p-4 md:p-6  items-center rounded-3xl!">
          <div className="text-right text-background space-y-3  md:space-y-6">
            {[
              "في بُعد لا نؤمن بالتسويق العشوائي، بل نصنع استراتيجيات رقمية مدروسة تُحدث فرقًا حقيقيًا في نمو أعمالك.",
              "نحن وكالة تسويق رقمي سعودية نساعد العلامات التجارية على بناء حضور قوي وتحقيق نتائج قابلة للقياس. نجمع بين التحليل العميق للسوق، الإبداع في التنفيذ، والتركيز المستمر على الأداء.",
              "نحوّل الأفكار إلى خطط، والخطط إلى نتائج ملموسة تعزز مبيعاتك وتضعك في موقع متقدم أمام منافسيك.",
              "هدفنا ليس إطلاق حملات فقط، بل بناء نمو مستدام يعكس قيمة أعمالك ويصنع أثرًا طويل المدى.",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="bg-background rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                  <Image src={logoWhite} alt="Logo" width={16} height={16} />
                </div>

                <p className="text-base md:text-lg leading-relaxed font-bold">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Image Content */}
          <div className="relative z-100 md:static flex justify-center md:justify-end">
            {/* Logo */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20">
              <Image
                src={logo}
                alt="Logo"
                width={80}
                height={80}
                className="w-16 md:w-20"
              />
            </div>

            <Image
              src={man}
              alt="Founder"
              className="
                  static
                  md:absolute
                  md:!bottom-0
                  left-0
                  w-[550px] h-[500px]
                  md:w-[400px] md:h-[500px]
                  z-100
                  object-contain
                "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
